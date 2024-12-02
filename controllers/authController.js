const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const config = require('../config');

// Login controller
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const employee = await Employee.findOne({ username });

    if (!employee || !bcrypt.compareSync(password, employee.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: employee._id }, config.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

// Fetch payments data
exports.fetchPayments = (req, res) => {
    // Retrieve international payment data from main database or API
    // Send relevant data to frontend securely
    res.json({ payments: [{ id: 1, amount: 1000, currency: "USD" }] });
};
