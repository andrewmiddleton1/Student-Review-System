const path = require('path');
const router = require('express').Router();
const userRoutes = require('./api/user-routes');
const studentApiRoutes = require('./api/student-api-routes');
const postApiRoutes = require('./api/post-api-routes');
const authorApiRoutes = require('./api/author-api-routes');

// API Routes
router.use(userRoutes);
router.use(studentApiRoutes);
router.use(postApiRoutes);
router.use(authorApiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
