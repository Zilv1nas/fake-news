import React from 'react';
import './Post.css';

const Post = ({ post: { title, body } }) => (
  <article className="Post">
    <h1 className="Post-title">{title}</h1>
    <p className="Post-body">{body}</p>
  </article>
);

export default Post;