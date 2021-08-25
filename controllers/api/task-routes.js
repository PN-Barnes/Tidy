const router = require('express').Router();
const { Task } = require('../../models');
const { withAuth } = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbUserData = await Task.findAll({});
    if (!dbUserData) {
      res.status(400).json({ message: 'No tasks were found!' });
    } else {
      res.status(200).json(dbUserData);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
