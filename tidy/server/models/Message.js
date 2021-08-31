const { Schema, model } = require('mongoose');

const messageSchema = new schema({
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
  receiver_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Message = model('Message', messageSchema);
module.exports = Message;
