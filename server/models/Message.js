const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  sender_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  sender_username: {
    type: String,
  },
  receiver_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  receiver_username: {
    type: String,
  },
});

const Message = model('Message', messageSchema);
module.exports = Message;
