import {
  pool,
  isFallbackMode,
  mockExperiences,
  mockProjects,
  mockAchievements
} from '../config/db.js';

export const runCustomQuery = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: 'SQL query parameter is required.'
    });
  }

  // Strictly enforce read-only queries (SELECT statements only)
  const queryTrim = query.trim().toUpperCase();
  if (!queryTrim.startsWith('SELECT')) {
    return res.status(403).json({
      success: false,
      message: 'Security Alert: Only read-only SELECT queries are allowed in this sandbox.'
    });
  }

  // Prevent subqueries or multiple statements that could execute modifications
  if (queryTrim.includes(';') && queryTrim.indexOf(';') < queryTrim.length - 1) {
    return res.status(403).json({
      success: false,
      message: 'Security Alert: Multiple SQL statement execution is disabled.'
    });
  }

  try {
    if (isFallbackMode) {
      // Parse local mock results based on target strings
      const qLower = query.toLowerCase();
      let rows = [];

      if (qLower.includes('experiences')) {
        rows = mockExperiences.map(e => ({
          id: e.id,
          role: e.role,
          company: e.company,
          duration: e.duration,
          location: e.location
        }));
      } else if (qLower.includes('projects')) {
        rows = mockProjects.map(p => ({
          id: p.id,
          title: p.title,
          category: p.category,
          tags: p.tags
        }));
      } else if (qLower.includes('achievements')) {
        rows = mockAchievements.map(a => ({
          id: a.id,
          title: a.title,
          value: a.value
        }));
      } else {
        rows = [
          {
            sandbox_status: 'Active (Fallback Mode)',
            message: 'To execute custom relational queries, connect your local MySQL database by configuring backend/.env.'
          }
        ];
      }

      return res.status(200).json({
        success: true,
        source: 'fallback-mock-db',
        columns: Object.keys(rows[0] || {}),
        rows
      });
    }

    // Execute safe query on MySQL database
    const [rows] = await pool.query(query);
    
    // Extract column keys
    const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

    res.status(200).json({
      success: true,
      source: 'mysql-db',
      columns,
      rows
    });
  } catch (error) {
    console.error('SQL Execution Error:', error);
    res.status(500).json({
      success: false,
      message: `Database Query Error: ${error.message}`
    });
  }
};
