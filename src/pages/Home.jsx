import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const Home = ({ events }) => {
  return (
    // fetch event data and display it; each card provides a <Link to={`/event/${event.id}`}> to the EventDetails page
    <div className="flex flex-wrap p-2">

      {events.map((event) => (
        <Link key={event.id} to={`/event/${event.id}`}>
        <EventCard eventData={event} />
        </Link>
      ))}
    </div>
    
  );
};

export default Home;
