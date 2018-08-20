import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import PostListItem from './PostListItem';

it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <PostListItem post={{ title: 'Trump', body: 'Build a wall', id: 'id_1' }} />
    </MemoryRouter>
  );
  expect(wrapper.find('.PostListItem-title').text()).toContain('Trump');
  expect(wrapper.find('.PostListItem-body').text()).toContain('Build a wall');
});