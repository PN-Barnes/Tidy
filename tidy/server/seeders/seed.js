const db = require('../config/connection');
const { User, Task, workEvent } = require('../models');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    // await User.deleteMany({});

    // await User.create(userSeeds);
    // await Task.create(taskSeeds);
    // await User.deleteMany({});
    // const users = await User.create(userSeeds);

    await workEvent.deleteMany({});
    const events = await workEvent.create(eventSeeds);

    for (newUser of users) {
      const tempEvent = events[Math.floor(Math.random() * events.length)];
      tempEvent.attendees.push(newUser._id);
      await tempEvent.save();
    }

    console.log('\n* ==================== DB SEEDED ==================== *!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
