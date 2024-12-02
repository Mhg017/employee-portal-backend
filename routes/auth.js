const express = require('express');
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleswares/authMiddleware');

const router = express.Router();

// Login route
router.post('/login', authController.login);

// Protected route to fetch payment data (example)
router.get('/payments', authenticateToken, authController.fetchPayments);

module.exports = router;
