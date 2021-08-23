const User = require('./User');
const Task = require('./Task');
const Photo = require('./Photo');
const Message = require('./Message');
const Event = require('./Event');

User.hasMany(Event, {
  foreignKey: 'attendees',
});

Event.belongsTo(User, {
  foreignKey: 'attendees',
  onDelete: 'CASCADE',
});

User.hasMany(Task, {
  foreignKey: 'userId',
});

Task.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

User.hasMany(Photo, {
  foreignKey: 'owner',
});

Photo.belongsTo(User, {
  foreignKey: 'owner',
  onDelete: 'CASCADE',
});

module.exports = { User, Task, Photo, Message, Event };
