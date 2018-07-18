import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => (
  posts.map(post => <Post key={post.id} post={post} />)
);

export default Posts;
