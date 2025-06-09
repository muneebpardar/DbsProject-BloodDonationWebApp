const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST - Add a new user
router.post('/', async (req, res) => {
  const { full_name, email, blood_type, phone, role } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (full_name, email, blood_type, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [full_name, email, blood_type, phone, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting user:', err.message);
    res.status(500).json({ error: 'Failed to add user' });
  }
});

module.exports = router; // ← This must be at the end
