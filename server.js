const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const securityMiddleware = require('./middleswares/securityMiddleware');
const config = require('./config');

const app = express();
app.use(helmet()); // Security headers
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: config.RATE_LIMIT_WINDOW_MS,
    max: config.RATE_LIMIT_MAX,
    message: "Too many requests from this IP, please try again later."
});

app.use('/api', limiter);
app.use('/api/auth', authRoutes);
app.use(securityMiddleware.xssProtection);

app.listen(config.PORT, () => {
    console.log(`Employee portal server running on port ${config.PORT}`);
});
