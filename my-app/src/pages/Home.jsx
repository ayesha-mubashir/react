
import React from 'react';

const Home = ({ count, setCount }) => {
  return (
    <div>
      <h1>Home</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Home;
