console.log("App.js is running...");

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('BloodConnect API is working');
});

// Users route
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const hospitalRoutes = require('./routes/hospitals');
app.use('/hospitals', hospitalRoutes);

const bloodInventoryRoutes = require('./routes/blood_inventory');
app.use('/blood_inventory', bloodInventoryRoutes);

const donationRoutes = require('./routes/donations');
app.use('/donations', donationRoutes);

const requestRoutes = require('./routes/blood_requests');
app.use('/blood_requests', requestRoutes);

const notificationRoutes = require('./routes/notifications');
app.use('/notifications', notificationRoutes);

const eligibilityRoutes = require('./routes/eligibility');
app.use('/eligibility', eligibilityRoutes);

const locationRoutes = require('./routes/locations');
app.use('/locations', locationRoutes);

const adminRoutes = require('./routes/admins');
app.use('/admins', adminRoutes);

const bloodTypeRoutes = require('./routes/bloodTypes');
app.use('/blood-types', bloodTypeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
