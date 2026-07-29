const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 5 * 1000,
    max: 5,

    handler: (req, res) => {
        res.status(429).json({
            success: false,
            message: "Too many requests. Try again in 5 seconds.",
            retryAfter: 5
        });
    }
});

module.exports = limiter;