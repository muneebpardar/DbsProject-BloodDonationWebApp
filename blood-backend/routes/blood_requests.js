const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all blood requests
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blood_requests ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching blood requests:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST new request
router.post('/', async (req, res) => {
  const { user_id, blood_type, hospital_id, units_required } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO blood_requests (user_id, blood_type, hospital_id, units_required) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, blood_type, hospital_id, units_required]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding blood request:', err.message);
    res.status(500).json({ error: 'Failed to add blood request' });
  }
});

module.exports = router;
