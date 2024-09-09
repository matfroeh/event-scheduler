import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
