const { Schema, model } = require('mongoose');

const photoSchema = new schema({
  url_link: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Photo = model('Photo', photoSchema);
module.exports = Photo;
