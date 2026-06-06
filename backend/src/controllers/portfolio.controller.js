import {
  pool,
  isFallbackMode,
  mockExperiences,
  mockProjects,
  mockAchievements
} from '../config/db.js';

export const getPortfolioData = async (req, res) => {
  try {
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

    res.status(200).json({
      success: true,
      source: 'mysql-db',
      data: {
        experiences,
        projects: projRows,
        achievements: achRows
      }
    });
  } catch (error) {
    console.error('Error fetching portfolio data from MySQL:', error);
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
