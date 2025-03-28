
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import PropTypes from "prop-types";
  import axiosInstance from "../utils/axiosInstance";
  import "./Auth.css";
  
  const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axiosInstance.post("/api/auth/login", {
          email,
          password,
        });
  
        localStorage.setItem("token", res.data.token);
        setIsAuthenticated(true);
        navigate("/");
      } catch (err) {
        alert(err.response?.data?.msg || "Login failed");
      }
    };
  
    return (
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span></p>
      </div>
    );
  };
  

  export default Login;
          