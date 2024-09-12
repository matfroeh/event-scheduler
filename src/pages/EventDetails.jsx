import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EventDetails() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch the event details using the ID
    fetch(`http://localhost:3001/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) {
    return <div>Loading event details...</div>;
  }
  return (
    <div className="flex justify-center p-5 font-sans w-full box-border">
      <div className="card w-full max-w-lg shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="p-5 bg-cyan-100">
          <h1 className="text-teal-700 text-center text-2xl font-bold">{event.title}</h1>
          <p className="text-lg text-teal-900 text-center">{event.description}</p>
        </div>
        <div className="flex justify-around p-5 bg-teal-100">
          <div className="flex-1 p-2">
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
          <div className="flex-1 p-2">
            <h2 className="text-teal-900 text-xl font-semibold">Event Details</h2>
            <p><strong>Latitude:</strong> {event.latitude}</p>
            <p><strong>Longitude:</strong> {event.longitude}</p>
            <p><strong>Organizer ID:</strong> {event.organizerId}</p>
            <p><strong>Created At:</strong> {new Date(event.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(event.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;