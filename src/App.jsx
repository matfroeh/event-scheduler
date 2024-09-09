import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";
import HomeProtected from "./pages/HomeProtected";
import ProtectedLayout from "./pages/ProtectedLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="event/:id" element={<EventDetails />} />

          <Route path="auth" element={<ProtectedLayout />}>
            <Route index element={<HomeProtected />} />
            <Route path="create-event" element={<CreateEvent />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
};

export default App;
