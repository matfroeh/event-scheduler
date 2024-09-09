import { Link } from "react-router-dom";

function HomeProtected() {
  return (
    <div>
      <div>HomeProtected</div>
      <Link to="/auth/create-event">Create Event</Link>
    </div>
  );
}

export default HomeProtected;
