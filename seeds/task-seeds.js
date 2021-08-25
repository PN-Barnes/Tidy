const { Task } = require('../models');

const taskData = [
  {
    content: 'Create more seed data',
    date: Date.now(),
    userId: 1,
  },
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;
