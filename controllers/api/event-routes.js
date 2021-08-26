const router = require('express').Router();
const { workEvent } = require('../../models');
const { withAuth } = require('../../utils/auth');

// ? ----------------- GET ROUTES -------------------- ? //

router.get('/', async (req, res) => {
  try {
    const dbEventData = await workEvent.findAll();

    const event = dbEventData.get({ plain: true });
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbEventData = await workEvent.findByPk(req.params.id);

    const event = dbEventData.get({ plain: true });
    res.json(event);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? ----------------- POST ROUTES -------------------- ? //

router.post('/', async (req, res) => {
  try {
    const dbEventData = await workEvent.create({
      date: req.body.date,
      content: req.body.content,
      attendees: req.body.attendees,
    });

    const event = dbEventData.get({ plain: true });
    res.status(200).json(event);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? ----------------- PUT ROUTES -------------------- ? //

router.put('/:id', async (req, res) => {
  try {
    const dbEventData = await workEvent.update({
      date: req.body.date,
      content: req.body.content,
      attendees: req.body.attendees,
    });

    const updatedEvent = dbEventData.get({ plain: true });
    res.json(updatedEvent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ? ----------------- DELETE ROUTES -------------------- ? //

router.delete('/:id', async (req, res) => {
  try {
    const dbEventData = await workEvent.destroy({
      where: {
        id: req.params.id,
      },
    });

    const event = dbEventData.get({ plain: true });
    res.json(event);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
