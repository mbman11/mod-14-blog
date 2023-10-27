const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blog-routes.js');
// const userRoutes = require('./');

router.use('/blogs', blogRoutes);
router.use('/create-user', userRoutes);

module.exports = router;
