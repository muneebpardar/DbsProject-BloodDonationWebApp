const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all hospitals
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM hospitals ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching hospitals:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST - Add a new hospital
router.post('/', async (req, res) => {
  const { name, area, address } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO hospitals (name, area, address) VALUES ($1, $2, $3) RETURNING *',
      [name, area, address]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting hospital:', err.message);
    res.status(500).json({ error: 'Failed to add hospital' });
  }
});

module.exports = router;
