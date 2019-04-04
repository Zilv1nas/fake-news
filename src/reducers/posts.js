const INITIAL_STATE = {
  posts: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
}
