import React from 'react';
import { Link } from 'react-router-dom';
import './PostListItem.css';

interface IPost {
  id: string;
  title: string;
  body: string;
}

const PostListItem = ( post: IPost) => (
  <article className="PostListItem">
    <Link to={`/posts/${post.id}`}>
      <h1 className="PostListItem-title">{post.title}</h1>
    </Link>
    <p className="PostListItem-body">{post.body}</p>
  </article>
);

export default PostListItem;
