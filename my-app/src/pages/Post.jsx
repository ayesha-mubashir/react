
import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "../styles/Poststyle.css"; 
import { useNavigate } from "react-router-dom";

const Post = ({ posts, setPosts }) => {
  
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/posts/delete/${id}`); 
      alert("Post deleted successfully!");

      setPosts(prevPosts => prevPosts.filter(post => post._id !== id));
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting post");
    }
  };
  

  const handleEdit = (postId) => {
    const postToEdit = posts.find(post => post._id === postId);
    if (postToEdit) {
      navigate("/edit-post", { state: { post: postToEdit } });
    }
  };

  return (
    <div className="posts-container">
      <h2 className="posts-title">My Posts</h2>
      <button className="create-post-btn" onClick={() => window.location.href = "/create-post"}>
        Create New Post
      </button>
      <div className="posts-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
              <button className="edit-btn" onClick={() => handleEdit(post._id)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(post._id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Post;
