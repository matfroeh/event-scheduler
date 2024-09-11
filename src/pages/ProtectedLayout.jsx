import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const ProtectedLayout = () => { 
  const {user, auth } = useAuthContext();

  console.log(`user: ${user?.id}; authentification status: ${auth}`);
  
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
