import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const ProtectedLayout = () => {
  // Just for testing purposes
  const { auth, setAuth } = useOutletContext();

  useEffect(() => {
    setAuth(Math.random() > 0.5 ? true : false);
    console.log(auth);
  }, []);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedLayout;
