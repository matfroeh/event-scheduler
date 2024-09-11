import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const CreateEvent = ({getEventData}) => {
  const { user, token } = useAuthContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }
      const responseData = await response.json();
      // console.log(responseData);
      alert(`Event created successfully with Event ID: ${responseData.id}`);
      await getEventData();
      navigate("/auth");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Create Event</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Title:</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                className="input input-bordered"
                value={form.title}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="Description of the event"
                className="textarea textarea-bordered h-24"
                value={form.description}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date and Time:</span>
              </label>
              <input
                type="datetime-local"
                name="date"
                className="input input-bordered"
                value={form.date}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location:</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location of the event"
                className="input input-bordered"
                value={form.location}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Organizer:</span>
              </label>
              <input
                type="text"
                name="organizerId"
                placeholder="Organizer"
                className="input input-bordered"
                value={user.email}
                disabled
              />
            </div>

            {/* {error && (
              <p className="text-red-500 text-sm label mt-2">{error}</p>
            )} */}
            <div className="form-control mt-8">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Create New Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
