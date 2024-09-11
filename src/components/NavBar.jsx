import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

function NavBar() {
  const { auth, user, logout } = useAuthContext();

  const handleLogout = () => {
    // console.log("Logout");
    logout();
  };
  return (
    <div>
      {auth ? (
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <Link to="/auth">
              <button className="btn btn-ghost text-xl">Home</button>
            </Link>
          </div>
          <div className="navbar-center">
            <Link to="/auth/create-event" className="btn flex btn-primary m-2">
              Create Event
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-success m-1">
                {user?.email}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
              >
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <Link to="/">
              <button className="btn btn-ghost text-xl">Home</button>
            </Link>
          </div>

          <div className="navbar-end">
            {/*hidden when logged in*/}
            <Link to="/login">
              <button className="btn btn-ghost">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-ghost">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
