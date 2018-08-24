import React, { Component } from 'react';
import { Loader } from 'src/components';
import { PostEntity } from 'src/model';
import { api } from 'src/services';
import './Post.css';

interface PostProps {
  match: any;
}

class Post extends Component<PostProps, { post?: PostEntity }> {
  constructor(props: any) {
    super(props);
    this.state = {
      post: undefined
    }
  }

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const {
      match: { params }
    } = this.props;
    try {
      const post = await api.Posts.findOne(params.id);
      this.setState({ post });
    } catch (e) {
      console.error(e); // tslint:disable-line
    }
  };

  render() {
    const { post } = this.state;
    if (!post) {
      return <Loader />;
    }

    return (
      <article className="Post">
        <h1 className="Post-title">{post.title}</h1>
        <p className="Post-body">{post.body}</p>
      </article>
    );
  }
}

export default Post;
