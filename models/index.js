const User = require('./User');
const Event = require('./Events');

User.hasMany(Event, {
  foreignKey: 'username',
});

Event.belongsTo(User, {
  foreignKey: 'username',
  onDelete: 'CASCADE',
});

module.exports = { User, Event };
