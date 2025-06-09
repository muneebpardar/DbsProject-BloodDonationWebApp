const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all admins
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username FROM admins');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching admins:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST new admin
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO admins (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting admin:', err.message);
    res.status(500).json({ error: 'Failed to insert admin' });
  }
});

module.exports = router;
