const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
// const userRoutes = require('./');

router.use('/blogs', blogRoutes);
router.use('/create-user', userRoutes);

module.exports = router;
