import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Auth.css";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" onClick={() => alert("user logged in")}>Login</button>
      </form>
      <p>Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
    </div>
  );
};

export default Login;
