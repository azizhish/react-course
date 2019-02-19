import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    return <div>
        <h1>EventList</h1>
      {events.map(event => (
        <EventListItem onEventOpen={onEventOpen}
          key={event.id}
          event={event}
          deleteEvent={deleteEvent}
        />
        ))}
      </div>;
  }
}

export default EventList
