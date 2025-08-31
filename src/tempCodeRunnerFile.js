import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/dashboard/dashboard"; 
import Calendar from "./components/calendar/calendar";
import Schemes from "./components/schemes/schemes";
import Remedies from "./components/remedies/remedies";
import Prediction from "./components/prediction/prediction"
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currUser,setCurrUser]=useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token,currUser) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
    setCurrUser(currUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard currUser={currUser} onLogout={handleLogout} /> : <Navigate to="/login" replace />}>
          <Route index element={<Navigate to="prediction"  />} /> 
          <Route path="prediction" element={<Prediction/>} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="schemes" element={<Schemes />} />
          <Route path="remedies" element={<Remedies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
