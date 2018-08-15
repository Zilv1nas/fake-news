import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from './App';
import { api } from './services';


it('renders without crashing', () => {
  api.Posts.all = jest.fn().mockReturnValue([]);
  mount(
    <MemoryRouter initialEntries={['/posts']}>
      <App />
    </MemoryRouter>
  );
});
