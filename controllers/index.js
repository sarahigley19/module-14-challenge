const router = require('express').Router();
const userRoutes = require('./api/userRoutes.js');
const postRoutes = require('./api/postRoutes.js');
const commentRoutes = require('./api/commentRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

