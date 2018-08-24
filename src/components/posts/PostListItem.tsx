import React from 'react';
import { Link } from 'react-router-dom';
import { PostEntity } from 'src/model';
import './PostListItem.css';

interface PostListItemProps {
  post: PostEntity;
}

const PostListItem = ({ post } : PostListItemProps) => (
  <article className="PostListItem">
    <Link to={`/posts/${post.id}`}>
      <h1 className="PostListItem-title">{post.title}</h1>
    </Link>
    <p className="PostListItem-body">{post.body}</p>
  </article>
);

export default PostListItem;
