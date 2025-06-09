const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all blood inventory
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blood_inventory ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching blood inventory:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST new inventory record
router.post('/', async (req, res) => {
  const { hospital_id, blood_type, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO blood_inventory (hospital_id, blood_type, quantity) VALUES ($1, $2, $3) RETURNING *',
      [hospital_id, blood_type, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding blood inventory:', err.message);
    res.status(500).json({ error: 'Failed to add blood inventory' });
  }
});

module.exports = router;
