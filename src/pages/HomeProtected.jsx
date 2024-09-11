import { Link } from "react-router-dom";
// COMPONENT NOT NEEDED ANYMORE (IT IS NOT IN USE RIGHT NOW AS WELL)
function HomeProtected() {
  return (
    <div>
      <div>HomeProtected</div>
      <Link to="/auth/create-event">Create Event</Link>
    </div>
  );
}

export default HomeProtected;
