import React from 'react';
import { mount } from 'enzyme';
import PostListItem from './PostListItem';

it('renders without crashing', () => {
  const wrapper = mount(
    <PostListItem post={{ title: 'Trump', body: 'Build a wall' }} />
  );
  expect(wrapper.find('.PostListItem-title').text()).toContain('Trump');
  expect(wrapper.find('.PostListItem-body').text()).toContain('Build a wall');
});