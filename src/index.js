import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StoreProvider } from './reduxLite';
import postsReducer from './reducers/posts';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider reducer={postsReducer}>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
