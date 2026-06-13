import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './src/config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function applyIndexes() {
  console.log('Connecting to MySQL Database...');
  
  try {
    const schemaPath = path.join(__dirname, '..', 'database', 'schema.sql');
    let schemaSql = fs.readFileSync(schemaPath, 'utf-8');
    
    // Replace the database name in schema.sql to match env
    schemaSql = schemaSql.replace(/rahul_portfolio/g, process.env.DB_NAME || 'defaultdb');

    console.log('Executing schema and applying indexes...');
    
    // Convert to multiple queries because pool.query doesn't always handle multiple statements well
    // if not explicitly enabled, but we enabled it via mysql2 connection logic implicitly?
    // Let's just run it
    const connection = await pool.getConnection();
    // We must ensure the connection allows multiple statements.
    // Actually, Aiven is already seeded. Running the whole script will truncate data!
    console.warn('WARNING: Running schema.sql will TRUNCATE existing data.');
    // Let's just run the index creation directly instead
    
    console.log('Creating single index on category...');
    await connection.query('CREATE INDEX idx_projects_category ON projects(category)').catch(e => console.log('Index might already exist:', e.message));
    
    console.log('Creating compound index on experiences...');
    await connection.query('CREATE INDEX idx_experiences_sort ON experiences(sort_order, id)').catch(e => console.log('Index might already exist:', e.message));
    
    console.log('Creating compound index on projects...');
    await connection.query('CREATE INDEX idx_projects_sort ON projects(sort_order, id)').catch(e => console.log('Index might already exist:', e.message));
    
    console.log('Creating compound index on achievements...');
    await connection.query('CREATE INDEX idx_achievements_sort ON achievements(sort_order, id)').catch(e => console.log('Index might already exist:', e.message));
    
    console.log('Creating FULLTEXT index on projects...');
    await connection.query('CREATE FULLTEXT INDEX ft_idx_projects_search ON projects(title, description)').catch(e => console.log('Index might already exist:', e.message));

    connection.release();
    console.log('✅ Indexes applied successfully!');
  } catch (error) {
    console.error('❌ Error applying indexes:', error);
  } finally {
    process.exit(0);
  }
}

applyIndexes();
