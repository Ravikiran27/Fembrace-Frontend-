import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup successful! Please log in.");
      navigate("/login");
    } 
    
    else
    alert(data.message);
  };

  return (
    <div className="signup">
      <div className="left">
        <img src="/assets/login.svg" alt="Signup" />
      </div>
      <div className="right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="signup-input"/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}className="signup-input"/>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-text" onClick={() => navigate("/login")}>Already have an account? <span>Login</span></p>
      </div>
    </div>
  );
};

export default Signup;
