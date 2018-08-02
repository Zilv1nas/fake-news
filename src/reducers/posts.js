import { posts } from '../actions';

const INITIAL_STATE = {
  postList: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case posts.SET_POSTS:
      return { ...state, postList: action.payload };
    case posts.ADD_POST:
      return { ...state, postList: [ action.payload, ...state.postList ] };
    default:
      return state;
  }
}
