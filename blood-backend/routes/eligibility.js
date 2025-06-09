const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all donor eligibility
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM donor_eligibility');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching eligibility:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new eligibility record
router.post('/', async (req, res) => {
  const { user_id, last_donation, eligible } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO donor_eligibility (user_id, last_donation, eligible) VALUES ($1, $2, $3) RETURNING *',
      [user_id, last_donation, eligible]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting eligibility:', err.message);
    res.status(500).json({ error: 'Failed to insert eligibility' });
  }
});

module.exports = router;
