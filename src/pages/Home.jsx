import { Link } from "react-router-dom";

function Home() {
  return (
    // fetch event data and display it; each card provides a <Link to={`/event/${event.id}`}> to the EventDetails page
    <div>
      <div>Home</div>
      
      {/* ToDo: Only to show up when protected */}
      <Link to="/create-event">Create Event</Link>
    </div>
  );
}

export default Home;
