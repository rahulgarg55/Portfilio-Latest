import {
  pool,
  isFallbackMode,
  mockExperiences,
  mockProjects,
  mockAchievements
} from '../config/db.js';
import logger from '../utils/logger.js';
import redisClient from '../utils/redis.js';
import { trackEvent } from '../utils/kafka.js';

export const getPortfolioData = async (req, res) => {
  try {
    // 1. Kafka Event Tracking
    trackEvent('portfolio-views', {
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });
    // 2. Fallback Mode Check
    if (isFallbackMode) {
      return res.status(200).json({
        success: true,
        source: 'fallback-mock-db',
        data: {
          experiences: mockExperiences,
          projects: mockProjects,
          achievements: mockAchievements
        }
      });
    }

    // 3. Redis Cache Check
    if (process.env.NODE_ENV !== 'test' && redisClient.isReady) {
      const cachedData = await redisClient.get('portfolio_data');
      if (cachedData) {
        return res.status(200).json({
          success: true,
          source: 'redis-cache',
          data: JSON.parse(cachedData)
        });
      }
    }

    // 4. Query MySQL
    // Query experiences
    const [expRows] = await pool.query('SELECT * FROM experiences ORDER BY sort_order ASC, id ASC');
    // Query projects
    const [projRows] = await pool.query('SELECT * FROM projects ORDER BY sort_order ASC, id ASC');
    // Query achievements
    const [achRows] = await pool.query('SELECT * FROM achievements ORDER BY sort_order ASC, id ASC');

    // Parse experience description JSON if stored as string
    const experiences = expRows.map(exp => {
      let parsedDesc = exp.description;
      if (typeof exp.description === 'string') {
        try {
          parsedDesc = JSON.parse(exp.description);
        } catch (e) {
          parsedDesc = [exp.description];
        }
      }
      return { ...exp, description: parsedDesc };
    });

    const portfolioData = {
      experiences,
      projects: projRows,
      achievements: achRows
    };

    // 5. Save to Redis Cache
    if (process.env.NODE_ENV !== 'test' && redisClient.isReady) {
      await redisClient.setEx('portfolio_data', 3600, JSON.stringify(portfolioData)); // Cache for 1 hour
    }

    res.status(200).json({
      success: true,
      source: 'mysql-db',
      data: portfolioData
    });
  } catch (error) {
    logger.error('Error fetching portfolio data from MySQL: ' + error.message);
    // On unexpected error, attempt to return mock data as a last-resort safety measure
    res.status(200).json({
      success: true,
      source: 'error-recovery-mock',
      data: {
        experiences: mockExperiences,
        projects: mockProjects,
        achievements: mockAchievements
      }
    });
  }
};

export const getSpotlightData = async (req, res) => {
  try {
    if (isFallbackMode) {
      // Mock spotlight: Top 3 projects
      const spotlightProjects = mockProjects.slice(0, 3);
      return res.status(200).json({
        success: true,
        source: 'fallback-mock-db',
        data: {
          spotlight: spotlightProjects
        }
      });
    }

    // Query top 3 spotlight projects from DB (assuming sort_order implies importance)
    const [spotlightRows] = await pool.query('SELECT * FROM projects ORDER BY sort_order ASC LIMIT 3');
    
    res.status(200).json({
      success: true,
      source: 'mysql-db',
      data: {
        spotlight: spotlightRows
      }
    });
  } catch (error) {
    logger.error('Error fetching spotlight data from MySQL: ' + error.message);
    res.status(200).json({
      success: true,
      source: 'error-recovery-mock',
      data: {
        spotlight: mockProjects.slice(0, 3)
      }
    });
  }
};
