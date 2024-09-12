import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContextProvider'; // Adjust the import path as needed

function EventDetails() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const { token, user } = useAuthContext(); // Get the token and user from the AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the event details using the ID
    fetch(`http://localhost:3001/api/events/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [id, token]);

  const handleDelete = () => {
    fetch(`http://localhost:3001/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          navigate('/auth');
        } else {
          console.error('Error deleting event:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting event:', error));
  };

  if (!event) {
    navigate('/auth');
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
        {user.id === event.organizerId && (
          <div className="flex justify-center p-5 bg-red-100">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              Delete Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetails;