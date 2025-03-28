import React from "react";

const Home = ({ posts, count, setCount }) => {
  return (
    <div>
      <h2>Home</h2>
      <div>
      {posts.length > 0 ? (
  posts.map((post) => (
    <div key={post._id}>  
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <div className="post-actions">
        <button onClick={() => handleDelete(post._id)} className="delete-btn">
          Delete
        </button>
        <button onClick={() => handleEdit(post._id)} className="edit-btn">
          Edit
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

export default Home;
