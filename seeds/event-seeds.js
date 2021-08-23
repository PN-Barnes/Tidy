const { workEvent } = require('../models');

const eventData = [
  {
    date: Date.now(),
    content: "Team Meeting: Server-Side API's",
    attendees: 1,
  },
];

const seedEvents = () => workEvent.bulkCreate(eventData);

module.exports = seedEvents;
