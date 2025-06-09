const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching locations:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new location
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO locations (name) VALUES ($1) RETURNING *',
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting location:', err.message);
    res.status(500).json({ error: 'Failed to insert location' });
  }
});

module.exports = router;
