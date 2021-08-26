const router = require('express').Router();
const { Message } = require('../../models');
const { withAuth } = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbMessageData = await Message.findAll({});
    if (!dbMessageData) {
      res.status(400).json({ message: 'No messages were found!' });
    } else {
      const message = dbMessageData.get({ plain: true });
      res.status(200).json(message);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbMessageData = await Message.findByPk(req.params.id);

    const message = dbMessageData.get({ plain: true });
    res.json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const dbMessageData = await Message.create({
      date: req.body.content,
      content: req.body.date,
      sender_id: req.body.sender_id,
      receiver_id: req.body.receiver_id,
    });

    const message = dbMessageData.get({ plain: true });
    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dbMessageData = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });

    const message = dbMessageData.get({ plain: true });
    res.json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
