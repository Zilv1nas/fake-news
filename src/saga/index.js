import { call, put, all, takeEvery, take, fork } from "redux-saga/effects";
import { posts } from "../actions";
import { api } from "../services";

export function* handleLoadPosts() {
  try {
    const result = yield call(api.Posts.all);
    yield put(posts.loadPostsSuccess(result));
  } catch (e) {
    yield put(posts.loadPostsFailure());
  }
}

export function* handleAddPost({ payload: post }) {
  try {
    const result = yield call(api.Posts.add, post);
    yield put(posts.addPostSuccess(result));
  } catch (e) {
    yield put(posts.addPostFailure());
  }
}

export function* handleTooManyPosts() {
  let count = 0;
  while (count < 2) {
    yield take(posts.ADD_POST_SUCCESS);
    count++;
  }

  yield put({ type: posts.POST_LIMIT_REACHED });
}

export function* root() {
  yield all([
    takeEvery(posts.LOAD_POSTS_REQUEST, handleLoadPosts),
    takeEvery(posts.ADD_POST_REQUEST, handleAddPost),
    fork(handleTooManyPosts)
  ]);
}
