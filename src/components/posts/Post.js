import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post: { id, title, body } }) => (
  <article className="Post">
    <Link to={`/posts/${id}`}>
      <h1 className="Post-title">{title}</h1>
    </Link>
    <p className="Post-body">{body}</p>
  </article>
);

export default Post;
