import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { api } from './services';


it('renders without crashing', () => {
  api.Posts.all = jest.fn().mockReturnValue([]);

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
