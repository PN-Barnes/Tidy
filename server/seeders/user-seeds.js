const { User } = require('../../../models');

const userData = [
  {
    firstName: 'Paul',
    lastName: 'Barnes',
    username: 'pbarnes',
    email: 'pb@moo.com',
    password: 'password123',
    role: 'Software Engineer',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
