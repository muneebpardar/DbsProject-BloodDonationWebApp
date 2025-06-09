const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all donations
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM donations ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching donations:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST new donation
router.post('/', async (req, res) => {
  const { user_id, hospital_id, blood_type } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO donations (user_id, hospital_id, blood_type) VALUES ($1, $2, $3) RETURNING *',
      [user_id, hospital_id, blood_type]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding donation:', err.message);
    res.status(500).json({ error: 'Failed to add donation' });
  }
});

module.exports = router;
