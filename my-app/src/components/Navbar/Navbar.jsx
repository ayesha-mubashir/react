
import PropTypes from 'prop-types';

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1 className="logo">{props.title}</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">My Posts</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

Navbar.prototype = {
    title: PropTypes.string.isRequired
    };

export default Navbar;
