import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StoreProvider } from './reduxLite';

const initialState = {
  posts: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
