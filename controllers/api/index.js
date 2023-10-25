const router = require('express').Router();
// const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
// const userRoutes = require('./user-routes');

router.use('/blogs', blogRoutes);
// router.use('/login', userRoutes);

module.exports = router;
