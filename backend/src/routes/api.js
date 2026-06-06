import express from 'express';
import { getPortfolioData } from '../controllers/portfolio.controller.js';
import { submitContactForm } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/portfolio', getPortfolioData);
router.post('/contact', submitContactForm);

export default router;
