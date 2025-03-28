  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axiosInstance from "../utils/axiosInstance";
  import "./Auth.css";
  
  const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await axiosInstance.post(`/api/auth/register`, {
          name,
          email,
          password,
        });
  
        alert("Signup successful! Please login.");
        navigate("/login");
      } catch (err) {
        alert(err.response?.data?.msg || "Signup failed");
      }
    };
  
    return (
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
      </div>
    );
  };
  
  export default Signup;
         