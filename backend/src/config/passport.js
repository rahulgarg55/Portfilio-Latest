import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { pool } from './db.js';
import logger from '../utils/logger.js';

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
      if (rows.length === 0) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      
      const user = rows[0];
      const match = await bcrypt.compare(password, user.password_hash);
      
      if (match) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    } catch (err) {
      logger.error('Passport Strategy Error: ' + err.message);
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await pool.query('SELECT id, username, role FROM users WHERE id = ?', [id]);
    if (rows.length > 0) {
      done(null, rows[0]);
    } else {
      done(new Error('User not found'));
    }
  } catch (err) {
    done(err);
  }
});

export default passport;
