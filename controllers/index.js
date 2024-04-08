const router = require('express').Router();
const userRoutes = require('./api/userRoutes.js');
const postRoutes = require('./api/postRoutes.js');
const commentRoutes = require('./api/commentRoutes.js');
const homeRoutes = require('./homeRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/' , homeRoutes);

module.exports = router;

