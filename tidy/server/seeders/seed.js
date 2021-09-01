const db = require('../config/connection');
const { User, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');

db.once('open', async () => {
  try {
    // await User.deleteMany({});

    // await User.create(userSeeds);
    await Task.create(taskSeeds);
    console.log('\n* ==================== DB SEEDED ==================== *!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
