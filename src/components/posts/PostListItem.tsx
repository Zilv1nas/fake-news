import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';

const PostListItem = ({ post: { id, title, body } }) => (
  <article className="PostListItem">
    <Link to={`/posts/${id}`}>
      <h1 className="PostListItem-title">{title}</h1>
    </Link>
    <p className="PostListItem-body">{body}</p>
  </article>
);

export default PostListItem;
