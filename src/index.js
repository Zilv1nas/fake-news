import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Posts } from './stores';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const stores = {
  posts: new Posts(),
};

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
