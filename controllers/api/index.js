const router = require('express').Router();
const userRoutes = require('./userRoute');
const postRoute = require('./postRoute');
const commentRoutes = require('./comentsRoute');

router.use('/users', userRoutes);
router.use('/posts', postRoute);
router.use('/comments', commentRoutes);

module.exports = router;
