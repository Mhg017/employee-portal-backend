const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Predefine employee data or add seeding logic here
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
