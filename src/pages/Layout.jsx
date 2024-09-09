import NavBar from "../components/NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  // Just for testing purposes
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <NavBar />
      <Outlet context={{ auth, setAuth }} />
    </div>
  );
}

export default Layout;
