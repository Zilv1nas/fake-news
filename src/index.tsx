import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { PostList } from './stores';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const stores = {
  postList: new PostList(),
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
