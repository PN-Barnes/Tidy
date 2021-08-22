const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedDB = async () => {
  await sequelize.sync({
    force: true,
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedDB();
