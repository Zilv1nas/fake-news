import React, { Component } from 'react';
import { Posts, AddPost } from '.';
import { Loader } from '..';
import { api } from '../../services';

class PostList extends Component {
  state = {
    posts: null,
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentWillUnmount() {
    this.shouldCancel = true;
  }

  loadPosts = async () => {
    const posts = await api.Posts.all();
    if (!this.shouldCancel) {
      this.setState({ posts });
    }
  }

  handleAdd = async ({ title, body }) => {
    const post = await api.Posts.add({ title, body });
    this.setState({
      posts: [post, ...this.state.posts]
    });
  };

  renderPosts = () => {
    const { posts } = this.state;
    if (!posts) return <Loader />;
    return <Posts posts={posts} />;
  }

  render() {
    return (
      <>
        <AddPost handleAdd={this.handleAdd} />
        {this.renderPosts()}
      </>
    );
  }
}

export default PostList;
