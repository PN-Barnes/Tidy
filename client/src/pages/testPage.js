import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries';
import EventList from '../components/eventList';
const Events = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  console.log(data, loading);

  const events = data?.workEvents || [];
  console.log(events);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList
              events={events}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
