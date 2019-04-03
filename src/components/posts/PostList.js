import React, { useState, useEffect } from 'react';
import { Posts, AddPost } from '.';
import { Loader } from '..';
import { api } from '../../services';

export default () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let shouldCancel = false;
    const loadPosts = async () => {
      const posts = await api.Posts.all();
      if (!shouldCancel) {
        setPosts(posts);
      }
    };
    loadPosts();

    return () => {
      shouldCancel = true;
    }
  }, []);
  
  const handleAdd = async ({ title, body }) => {
    const post = await api.Posts.add({ title, body });
    setPosts([post, ...posts]);
  };

  return (
    <>
      <AddPost handleAdd={handleAdd} />
      {posts && <Posts posts={posts} />}
      {!posts && <Loader />}
    </>
  );
};
