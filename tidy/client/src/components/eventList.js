import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events, title }) => {
  if (!events.length) {
    return <h3>No events Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {events &&
          events.map((event) => (
            <div key={event._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {event.date} <br />
                </h4>
                <h6 className="card-header bg-dark text-light p-2 m-0">
                  {event.content} <br />
                </h6>
                {events.attendees.map((attendee) => (
                  <Link
                    className="btn btn-block btn-squared btn-light text-dark"
                    to={`/events/${event._id}`}
                  ></Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventList;
