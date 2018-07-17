import React, { Component } from 'react';
import { api } from '../services';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const posts = await api.Posts.getAll();
    this.setState({ posts });
  }

  render() {
    return <span>{JSON.stringify(this.state.posts)}</span>;
  }
}

export default Posts;
