const router = require('express').Router();
const { User, Task, message, workEvent } = require('../../models');
const { withAuth } = require('../../utils/auth');

// GET User info with username === req.params.username
// * -------------------- SUCCESSFUL ---------------------- //
// ? -------------------- GET ROUTES ---------------------- //
router.get('/:username', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: { exclude: ['password'] },
      include: [{ model: workEvent }],
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

// ? ----------------- POST ROUTES -------------------- ? //
// * SUCCESSFUL Post route to create Users
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.get({ plain: true }).id;

      res.status(200).json(dbUserData);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// !== SUCCESSFUL ROUTE for login & logout function == ! //

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log(dbUserData.username);

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.get({ plain: true }).id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// ! -------------------------------------------- ! //;

module.exports = router;
