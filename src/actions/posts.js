import { api } from '../services';

export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';

export const loadPosts = () => async dispatch => {
  const posts = await api.Posts.all();
  dispatch({
    type: SET_POSTS,
    payload: posts,
  });
  return posts;
}


export const addPost = post => async dispatch => {
  const postResult = await api.Posts.add(post);
  dispatch({
    type: ADD_POST,
    payload: postResult,
  })

  return postResult;
}
