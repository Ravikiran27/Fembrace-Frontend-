import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  const response = await fetch("https://fembrace-node-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      onLogin(data.token,username);
      navigate("/dashboard");
    } 
    
    else {
      alert(data.message);
    }
  };

  return (
    <div className="login">

      <div className="left">
        <img src="/assets/login.svg" alt="" />
      </div>

      <div className="right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Login</button>
        </form>
        <p className="signup-text" onClick={() => navigate("/signup")}> Don't have an account? Sign Up  now</p>

      </div>
     
    </div>
  );
};

export default Login;
