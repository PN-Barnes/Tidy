const router = require('express').Router();
const { workEvent } = require('../../models');
const { withAuth } = require('../../utils/auth');

router.get('/', async (req, res) => {
  const dbUserData = await workEvent.findAll();
});

module.exports = router;
