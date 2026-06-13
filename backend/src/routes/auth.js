import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { pool } from '../config/db.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true, user: req.user });
});

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

router.get('/me', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ success: true, user: req.user });
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
});

// A temporary script endpoint to create the first admin user (since there's no signup page)
router.post('/setup-admin', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if any user exists
    const [existing] = await pool.query('SELECT id FROM users LIMIT 1');
    if (existing.length > 0) {
      return res.status(403).json({ success: false, message: 'Admin already exists' });
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    
    await pool.query('INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)', [username, hash, 'admin']);
    logger.info('Admin user created');
    res.json({ success: true, message: 'Admin user created successfully' });
  } catch (error) {
    logger.error('Error creating admin: ' + error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

export default router;
