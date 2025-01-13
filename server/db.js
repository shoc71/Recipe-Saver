import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'infiniteloop',
  host: 'localhost',
  port: 5432,
  database: 'recipe_saver',
});

export default pool; // Correctly export the pool as the default export
