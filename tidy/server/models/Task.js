const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const taskSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Task = model('Task', taskSchema);
module.exports = Task;
