const { Schema, model } = require('mongoose');

const workEventSchema = new schema({
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
