import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const EditPost = ({ setPosts }) => {
  const location = useLocation();  
  const post = location.state?.post;  
  const navigate = useNavigate();

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [isDraft, setIsDraft] = useState(post?.isDraft || false);

  if (!post) {
    navigate("/posts");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axiosInstance.put(`/api/posts/edit/${post._id}`, {
        title,
        content,
        isDraft,
      });
  
      setPosts((prevPosts) =>
        prevPosts.map((p) =>
          p._id === post._id ? { ...p, title, content, isDraft } : p
        )
      );
  
      alert("Post updated successfully!");
      navigate("/posts"); 
    } catch (err) {
     ;
      
      if (err.response) {
        console.error("Error response data:", err.response.data);
        console.error("Error status:", err.response.status);
        console.error("Error headers:", err.response.headers);
      }
        alert(err.response?.data?.msg || "Error updating post");
    }
  };
  
  

  return (
    <div>
      <h2>Edit Post</h2>
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
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
