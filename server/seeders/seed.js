const db = require('../config/connection');
const { User, Task, workEvent, Message } = require('../models');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');
const eventSeeds = require('./eventSeeds.json');
const messageSeeds = require('./message-seeds.json');

db.once('open', async () => {
  try {
    // await User.deleteMany({});

    // await User.deleteMany({});
    // const users = await User.create(userSeeds);

    // await workEvent.deleteMany({});
    // const events = await workEvent.create(eventSeeds);

    // await Task.deleteMany({});
    // await Task.create(taskSeeds);

    await Message.deleteMany();
    await Message.create(messageSeeds);

    // for (newUser of users) {
    //   const tempEvent = events[Math.floor(Math.random() * events.length)];
    //   tempEvent.attendees.push(newUser._id);
    //   await tempEvent.save();
    // }

    console.log('\n* ==================== DB SEEDED ==================== *!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
