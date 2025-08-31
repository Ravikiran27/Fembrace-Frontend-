import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="home-content">
        <h1>FemBrace</h1>
        <p className="home-qoute">Your wellness, your way. Flow with confidence.</p>

        <button className="home-btn" onClick={() => navigate("/login")}>
          Begin Your Journey
        </button>
      </div>

      <img src="/assets/wave.svg" alt="Decorative Wave" className="wave-bg" />
    </div>
  );
};

export default Home;