import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard({ currUser, onLogout }) {
  
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const token = localStorage.getItem("authToken");

    fetch("http://localhost:5001/dashboard", {      
      method: "GET",
      headers: {"Authorization": `Bearer ${token}` }
    })

    .then((response) => {
      
      if (!response.ok) {

        localStorage.removeItem("authToken");
        navigate("/login"); 
      }
    })
    
    .catch((err) => {
      
      console.error(err);
      localStorage.removeItem("authToken");
      navigate("/login");
    });
  
  },[]); 

  return (
    <>
      <Header currUser={currUser} onLogout={onLogout} />
      <Outlet />
      <Footer />
    </>
  );

};