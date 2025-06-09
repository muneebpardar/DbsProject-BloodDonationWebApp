const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all blood types
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blood_types ORDER BY type');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching blood types:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new blood type
router.post('/', async (req, res) => {
  const { type } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO blood_types (type) VALUES ($1) RETURNING *',
      [type]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting blood type:', err.message);
    res.status(500).json({ error: 'Failed to insert blood type' });
  }
});

module.exports = router;
