import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"; 
import Post from "./pages/Post";
import "./App.css";

const App = () => {
  const [isAuthenticated, settingIsAuthenticated] = useState(false);
  const [count, setCount] = useState(0);
  
  return (
      
      <>
        <Navbar title="InstaAmigos" />
        <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />

        <Route path="/posts" element={<Post count={count} />} />
           
          <Route path="/login" element={<Login setIsAuthenticated={settingIsAuthenticated} text={console.log(isAuthenticated)}/>} />
          
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </>
      
    
  );
};

export default App;
