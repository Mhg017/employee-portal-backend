// XSS Protection
exports.xssProtection = (req, res, next) => {
    for (let key in req.body) {
        if (typeof req.body[key] === 'string') {
            req.body[key] = req.body[key].replace(/<[^>]+>/g, '');
        }
    }
    next();
};

// Clickjacking Protection
exports.clickjackingProtection = (req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY');
    next();
};
