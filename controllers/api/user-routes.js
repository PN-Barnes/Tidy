const router = require('express').Router();
const { User, Task, Event, message } = require('../../models');
const { withAuth } = require('../../utils/auth');

// GET User info with username === req.params.username
// * SUCCESSFUL
router.get('/:username', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: {
        exclude: ['password'],
        include: [
          {
            model: Task,
            attributes: ['content'],
          },
          {
            model: Event,
            attributes: ['date', 'content'],
          },
        ],
      },
      where: { username: req.params.username },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'No user found with this username!' });
    } else {
      const user = dbUserData.get({ plain: true });
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
