import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Biko.2022!!",
  port: 5432,
});

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

export const getClient = async () => {
  const client = await pool.connect();
  console.log("Database connected successfully");
  return client;
};

// Function to create tables if they don't exist
const initDB = async () => {
  try {
    // Create USERS table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        avatar text
      )
    `);

    // Create CRUDS table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cruds (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        date TIMESTAMP DEFAULT NOW(),
        image TEXT
      )
    `);

    console.log("Tables ensured successfully");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

// Call initDB once upon module import
initDB();

export default pool;
