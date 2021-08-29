const router = require('express').Router();

const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const messageRoutes = require('./message-routes');
const taskRoutes = require('./task-routes');

router.use('/user', userRoutes);
router.use('/event', eventRoutes);
router.use('/message', messageRoutes);
router.use('/task', taskRoutes);

module.exports = router;
