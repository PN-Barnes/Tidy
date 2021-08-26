const router = require('express').Router();
const { Task } = require('../../models');
const { withAuth } = require('../../utils/auth');

// ? ----------------- GET ROUTES -------------------- ? //

router.get('/', async (req, res) => {
  try {
    const dbTaskData = await Task.findAll({});
    if (!dbTaskData) {
      res.status(400).json({ message: 'No tasks were found!' });
    } else {
      const task = dbTaskData.get({ plain: true });
      res.status(200).json(task);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbTaskData = await Task.findByPk(req.params.id);

    const task = dbTaskData.get({ plain: true });
    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? ----------------- POST ROUTES -------------------- ? //

router.post('/', async (req, res) => {
  try {
    const dbTaskData = await Task.create({
      content: req.body.content,
      date: req.body.date,
      userId: req.body.userId,
    });

    const task = dbTaskData.get({ plain: true });
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? ----------------- PUT ROUTES -------------------- ? //

router.put('/:id', async (req, res) => {
  try {
    const dbTaskData = await Task.update({
      content: req.body.content,
      date: req.body.date,
      userId: req.body.userId,
    });

    const updatedTask = dbTaskData.get({ plain: true });
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? ----------------- DELETE ROUTES -------------------- ? //

router.delete('/:id', async (req, res) => {
  try {
    const dbTaskData = await task.destroy({
      where: {
        id: req.params.id,
      },
    });

    const task = dbTaskData.get({ plain: true });
    res.json(task);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;