import React, { Component, Fragment } from 'react';
import { Posts, AddPost } from '.';
import { Loader } from '..';
import { api } from '../../services';

class PostList extends Component {
  state = {
    posts: null,
    shoudCancel: false
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentWillUnmount() {
    this.shoudCancel = true;
  }

  loadPosts = async () => {
    const posts = await api.Posts.all();
    if (!this.shoudCancel) {
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
      <Fragment>
        <AddPost handleAdd={this.handleAdd} />
        {this.renderPosts()}
      </Fragment>
    );
  }
}

export default PostList;
