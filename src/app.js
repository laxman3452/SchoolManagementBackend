const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

// Import all routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const attendanceRoutes = require('./routes/attendance');
const homeworkRoutes = require('./routes/homework');
const examRoutes = require('./routes/exam');
const feeRoutes = require('./routes/fee');
const timetableRoutes = require('./routes/timetable');
const libraryRoutes = require('./routes/library');
const busRoutes = require('./routes/bus');
const leaveRoutes = require('./routes/leave');
const activityRoutes = require('./routes/activity');
const notificationRoutes = require('./routes/notification');

const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// Connect to MongoDB
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// API Routes
// Each app.use() mounts the specified middleware function or router at the specified path
app.use('/api/auth', authRoutes);  // Authentication routes (login, register)
app.use('/api/users', userRoutes);  // User management routes
app.use('/api/attendance', attendanceRoutes);  // Attendance management
app.use('/api/homework', homeworkRoutes);  // Homework management
app.use('/api/exams', examRoutes);  // Exam management
app.use('/api/fees', feeRoutes);  // Fee management
app.use('/api/timetable', timetableRoutes);  // Timetable management
app.use('/api/library', libraryRoutes);  // Library management
app.use('/api/bus', busRoutes);  // Bus tracking
app.use('/api/leave', leaveRoutes);  // Leave management
app.use('/api/activities', activityRoutes);  // School activities
app.use('/api/notifications', notificationRoutes);  // Notifications

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;  // Export for testing purposes