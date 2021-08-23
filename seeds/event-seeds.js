const { Event } = require('../models');

const eventData = [
  {
    date: Date.now(),
    content: "Team Meeting: Server-Side API's",
    attendees: 1,
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;
