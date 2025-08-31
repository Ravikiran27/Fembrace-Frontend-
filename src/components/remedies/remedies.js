import React from "react";
import "./remedies.css";
import { FaMugHot, FaTint, FaSpa, FaHotjar, FaLeaf } from "react-icons/fa";

const remediesData = [
  { id: 1, name: "Ginger Tea", desc: "Reduces cramps & bloating.", icon: <FaMugHot /> },
  { id: 2, name: "Heat Therapy", desc: "Relieves muscle tension.", icon: <FaHotjar /> },
  { id: 3, name: "Chamomile Tea", desc: "Calms stress & pain.", icon: <FaLeaf /> },
  { id: 4, name: "Yoga & Stretching", desc: "Improves circulation.", icon: <FaSpa /> },
  { id: 5, name: "Hydration", desc: "Reduces bloating.", icon: <FaTint /> },
];

const Remedies = () => {
  return (
    <div className="remedies-container">
      <h2>Gentle Home Remedies</h2>
      <div className="remedies-grid">
        {remediesData.map((remedy) => (
          <div key={remedy.id} className="remedy-card">
            <div className="remedy-icon">{remedy.icon}</div>
            <h3>{remedy.name}</h3>
            <p>{remedy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Remedies;
