import React, { Component, Fragment } from 'react';
import { Posts, AddPost } from '.';
import { api } from '../../services';

class PostList extends Component {
  state = {
    posts: [],
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

  render() {
    return (
      <Fragment>
        <AddPost handleAdd={this.handleAdd} />
        <Posts posts={this.state.posts} />
      </Fragment>
    );
  }
}

export default PostList;
