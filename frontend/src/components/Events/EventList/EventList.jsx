import React from 'react'
import EventItem from './EventItem/EventItem'
import './EventList.css'

const EventList = props => {
    const events = props.events.map( event => {
        return <EventItem onDetail={props.onViewDetail} price={event.price} date={event.date} key={event._id} eventId={event._id} title={event.title} userId={props.authUserId} creatorId={event.creator._id}/>
      }) 
    return (
        <ul className="event__list">
          {events}
        </ul>
    )
}

export default EventList