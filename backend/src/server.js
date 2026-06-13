import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import client from 'prom-client';
import logger from './utils/logger.js';
import apiRouter from './routes/api.js';
import authRouter from './routes/auth.js';
import session from 'express-session';
import passport from './config/passport.js';
import { Server } from 'socket.io';
import { createServer } from 'http';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

// Prometheus metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

// Security and Performance Middleware
app.use(helmet()); // Sets HTTP security headers
app.use(compression()); // Compress all responses (gzip/brotli)

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api', limiter);

// Enable CORS for frontend requests
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173', 'http://127.0.0.1:3000'];
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));

// Socket.IO for real-time visitor counter
const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true
  }
});

let activeVisitors = 0;
io.on('connection', (socket) => {
  activeVisitors++;
  io.emit('visitor_count', activeVisitors);

  socket.on('disconnect', () => {
    activeVisitors--;
    io.emit('visitor_count', activeVisitors);
  });
});

app.use(express.json());

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'super-secret-key-for-portfolio',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    httpOnly: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRouter);
app.use('/api', apiRouter);

// Metrics route for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

httpServer.listen(PORT, () => {
  logger.info(`🚀 Portfolio backend server running on port ${PORT}`);
});
