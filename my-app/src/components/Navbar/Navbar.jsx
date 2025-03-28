import PropTypes from 'prop-types';
import React from "react";
import "./Navbar.css"; 
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated, title }) => {
  const navigate = useNavigate(); 
  
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsAuthenticated(false); 
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">{title}</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        
       
        {isAuthenticated ? (
          <>
            <li><Link to="/posts">My Posts</Link></li>
            <li><Link to="/create-post">Create Post</Link></li>
            
             <li>
              <button
                className="nav-button-link"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          
          <>
          <li><Link to="/create-post">Create Post</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
