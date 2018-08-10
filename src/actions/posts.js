import { api } from "../services";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";

export const POST_LIMIT_REACHED = "POST_LIMIT_REACHED";

export const loadPosts = () => ({ type: LOAD_POSTS_REQUEST });
export const loadPostsSuccess = posts => ({
  type: LOAD_POSTS_SUCCESS,
  payload: posts
});
export const loadPostsFailure = () => ({ type: LOAD_POSTS_FAILURE });

export const addPost = post => ({
  type: ADD_POST_REQUEST,
  payload: post
});

export const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  payload: post
});

export const addPostFailure = () => ({
  type: ADD_POST_FAILURE
});
