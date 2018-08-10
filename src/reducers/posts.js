import { posts } from "../actions";

const INITIAL_STATE = {
  postList: null,
  isLimitReached: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case posts.POST_LIMIT_REACHED:
      return { ...state, isLimitReached: true };
    case posts.LOAD_POSTS_SUCCESS:
      return { ...state, postList: action.payload };
    case posts.ADD_POST_SUCCESS:
      return { ...state, postList: [action.payload, ...state.postList] };
    default:
      return state;
  }
};
