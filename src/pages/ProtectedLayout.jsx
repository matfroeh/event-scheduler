import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const ProtectedLayout = () => { 
  const { auth } = useAuthContext();

  console.log(`authentification status: ${auth}`);
  
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
