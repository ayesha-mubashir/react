import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import axiosInstance from "./utils/axiosInstance";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState([]);  

  const fetchPosts = async () => {
    try {
      const res = await axiosInstance.get("/api/posts/published-posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err.response || err);
      alert(err.response?.data?.msg || "Error fetching posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar 
        title="InstaAmigos" 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated} 
      />
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} posts={posts} />} />
        <Route path="/create-post" element={<CreatePost setPosts={setPosts} />} />
        <Route 
          path="/edit-post"
          element={<EditPost posts={posts} setPosts={setPosts} />}
        />
        <Route path="/posts" element={<Post posts={posts} setPosts={setPosts} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
