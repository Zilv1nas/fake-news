import React, { Component } from 'react';
import { Loader } from '..';
import { api } from '../../services';
import './PostDetails.css';

class PostDetails extends Component {
  state = {
    post: null,
    shoudCancel: false
  }

  componentDidMount() {
    this.loadPost();
  }

  componentWillUnmount() {
    this.shoudCancel = true;
  }

  loadPost = async () => {
    const { match: { params } } = this.props;
    const post = await api.Posts.findOne(params.id);
    if (!this.shoudCancel) {
      this.setState({ post });
    }
  }

  render() {
    const { post } = this.state;
    if (!post) return <Loader />;
    return (
      <article className="PostDetails">
        <h1 className="PostDetails-title">{post.title}</h1>
        <p className="PostDetails-body">{post.body}</p>
      </article>
    );
  }
}

export default PostDetails;
