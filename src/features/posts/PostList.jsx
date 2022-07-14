import React from 'react';
import {useSelector} from 'react-redux';
import PostAuthor from './PostAuthor.jsx';
import {selectALLPosts} from './postSlice.js';

const PostList = () => {  
  const posts = useSelector(selectALLPosts) // state.posts is the same as state.posts
 
  const renderedPosts = posts.map(post => (
    <>
    <article key={posts.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
    </article>

    <p className='postCredit'>
      <PostAuthor userId={post.userId}/>
    </p>
    </>
  ));

  return (
    <section>
      <h2>Books</h2>
      {renderedPosts}
    </section>
  )
}

export default PostList