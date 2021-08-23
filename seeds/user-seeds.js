const { User } = require('../models');

const userData = [
  {
    firstName: 'Paul',
    lastName: 'Barnes',
    username: 'pbarnes',
    password: '$2b$10$w3QxbWaFZW9fIPOpbDPUOuqU0YHMO3Z./BQtl6p.Gcxkinu82C2Tq',
    role: 'Software Engineer',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
