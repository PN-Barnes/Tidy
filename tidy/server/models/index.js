const User = require('./User');
const workEvent = require('./workEvent');

// User.hasMany(workEvent, {
//   foreignKey: 'attendees',
// });

// workEvent.belongsTo(User, {
//   foreignKey: 'attendees',
//   onDelete: 'CASCADE',
// });

// User.hasMany(Task, {
//   foreignKey: 'userId',
// });

// Task.belongsTo(User, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE',
// });

// User.hasMany(Photo, {
//   foreignKey: 'owner',
// });

// Photo.belongsTo(User, {
//   foreignKey: 'owner',
//   onDelete: 'CASCADE',
// });

module.exports = { User, workEvent };
