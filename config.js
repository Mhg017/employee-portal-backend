require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5001,
    JWT_SECRET: process.env.JWT_SECRET,
    RATE_LIMIT_MAX: 100,
    RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000 // 15 minutes
};
