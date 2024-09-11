import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";
import ProtectedLayout from "./pages/ProtectedLayout";
import { AuthContextProvider } from "./context/AuthContextProvider";

const App = () => {
  const [events, setEvents] = useState([]);

  const getEventData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const eventData = await response.json();
      console.log(eventData.results);
      setEvents(eventData.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home events={events} />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="event/:id" element={<EventDetails />} />

            <Route path="auth" element={<ProtectedLayout />}>
              <Route index element={<Home events={events} />} />
              <Route path="create-event" element={<CreateEvent />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
