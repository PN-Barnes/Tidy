const seedUsers = require('./user-seeds');
const seedEvents = require('./event-seeds');
const sequelize = require('../config/connection');
const seedTasks = require('./task-seeds');

const seedDB = async () => {
  await sequelize.sync({
    force: true,
  });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedTasks();
  console.log('\n----- TASKS SEEDED -----\n');

  process.exit(0);
};

seedDB();
