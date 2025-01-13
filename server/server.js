// server.js (using ES Module syntax)
import dotenv from 'dotenv';
import express from 'express';
import pkg from 'pg'; // Default import for pg
const { Client } = pkg; // Destructure to get the Client class
import bcrypt from 'bcryptjs';
import cors from 'cors';

dotenv.config();  // Load environment variables

const app = express();

// Enable CORS for frontend to connect
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup using environment variables from .env
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

client.connect().then(() => {
    console.log('Connected to the PostgreSQL database');
}).catch(err => {
    console.error('Database connection error', err.stack);
});

// Register endpoint
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await client.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );
        res.status(200).json({ message: 'Registration successful', user: result.rows[0] });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await client.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password_hash)) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(400).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
