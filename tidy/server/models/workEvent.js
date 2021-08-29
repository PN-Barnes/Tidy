const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const workEventSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  content: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const workEvent = model('workEvent', workEventSchema);

module.exports = workEvent;
