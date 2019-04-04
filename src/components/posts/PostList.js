import React, { useEffect } from 'react';
import { Posts, AddPost } from '.';
import { Loader } from '..';
import { api } from '../../services';
import { useStore } from '../../reduxLite';

export default () => {
  const [{ posts }, dispatch] = useStore();

  useEffect(() => {
    let shouldCancel = false;
    const loadPosts = async () => {
      const posts = await api.Posts.all();
      if (!shouldCancel) {
        dispatch({ type: 'SET_POSTS', payload: posts });
      }
    };
    loadPosts();

    return () => {
      shouldCancel = true;
    }
  }, []);
  
  const handleAdd = async ({ title, body }) => {
    const post = await api.Posts.add({ title, body });
    dispatch({ type: 'ADD_POST', payload: post });
  };

  return (
    <>
      <AddPost handleAdd={handleAdd} />
      {posts && <Posts posts={posts} />}
      {!posts && <Loader />}
    </>
  );
};
