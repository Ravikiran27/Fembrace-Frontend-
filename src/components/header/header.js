import React, { useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ currUser, onLogout }) => {
  
  const [isdropDown , setisDropDown]= useState(false);

  function toggleDropDown(){
    setisDropDown(!isdropDown);
  }
  return (
    <header className="header">
      <Link to="/" className="logo">FemBrace</Link>

      <nav className="nav-links">
        <Link to="/dashboard/calendar">CALENDAR</Link>
        <Link to="/dashboard/prediction">PCOS PREDICTION</Link>
        <Link to="/dashboard/schemes">GOVERNMENT SCHEMES</Link>
        <Link to="/dashboard/remedies">REMEDIES</Link>
      </nav>

      <div className="profile-section">
        <button className="profile-btn" onClick={toggleDropDown}>
          <FaUserCircle style={{color: "#800f4b", height: "2.5rem", width: "2.5rem", borderRadius: "50%", border: "none" }} />
        </button>

        { isdropDown && 
          <div className="dropdown-menu">
            <p className="currUser">{currUser}</p>
            <button className="logout-btn" onClick={onLogout}>Sign out from your account</button>
          </div>
        }

      </div>
    </header>
  );
};

export default Header;
