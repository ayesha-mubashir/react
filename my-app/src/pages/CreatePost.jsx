import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ setPosts }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDraft, setIsDraft] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/posts/create", {
        title,
        content,
        isDraft,
      });

      alert("Post created successfully!");
      
      setPosts(prevPosts => [...prevPosts, res.data]); 

      navigate("/posts"); 
    } catch (err) {
      alert(err.response?.data?.msg || "Error creating post");
    }
  };


  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={isDraft}
            onChange={() => setIsDraft(!isDraft)}
          />
          Save as Draft
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
