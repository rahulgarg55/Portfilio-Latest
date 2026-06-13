import express from 'express';
import { getPortfolioData, getSpotlightData } from '../controllers/portfolio.controller.js';
import { submitContactForm } from '../controllers/contact.controller.js';
import { runCustomQuery } from '../controllers/query.controller.js';
import { validate } from '../middlewares/validate.js';
import { contactSchema } from '../schemas/contact.schema.js';

const router = express.Router();

router.get('/portfolio', getPortfolioData);
router.get('/spotlight', getSpotlightData);
router.post('/contact', validate(contactSchema), submitContactForm);
router.post('/query', runCustomQuery);

export default router;
