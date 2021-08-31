const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Task = model('Task', taskSchema);
module.exports = Task;
