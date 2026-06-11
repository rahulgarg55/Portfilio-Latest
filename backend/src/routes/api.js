import express from 'express';
import { getPortfolioData, getSpotlightData } from '../controllers/portfolio.controller.js';
import { submitContactForm } from '../controllers/contact.controller.js';
import { runCustomQuery } from '../controllers/query.controller.js';

const router = express.Router();

router.get('/portfolio', getPortfolioData);
router.get('/spotlight', getSpotlightData);
router.post('/contact', submitContactForm);
router.post('/query', runCustomQuery);

export default router;
