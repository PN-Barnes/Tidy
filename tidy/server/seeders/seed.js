const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);
  } catch (err) {
    throw err;
  }

  console.log('\n* ==================== DB SEEDED ==================== *!');
  process.exit(0);
});
