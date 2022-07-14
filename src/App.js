import React from 'react';
import './App.css';
import AddFormPosts from './features/posts/AddFormPosts';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="App">
      <h1>Book Library</h1>
      <AddFormPosts/>
      <PostList/>
    </div>
  );
}

export default App;
