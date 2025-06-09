const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET all notifications
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM notifications ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching notifications:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a notification
router.post('/', async (req, res) => {
  const { user_id, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO notifications (user_id, message) VALUES ($1, $2) RETURNING *',
      [user_id, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating notification:', err.message);
    res.status(500).json({ error: 'Failed to create notification' });
  }
});

module.exports = router;
