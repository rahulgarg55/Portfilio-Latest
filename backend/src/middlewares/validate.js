import { z } from 'zod';
import logger from '../utils/logger.js';

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    logger.warn(`Validation error on ${req.method} ${req.originalUrl}: ${JSON.stringify(err.errors)}`);
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: err.errors,
    });
  }
};
