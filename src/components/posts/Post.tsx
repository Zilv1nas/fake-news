import React, { Component } from 'react';
import { Loader } from 'src/components';
import { PostEntity } from 'src/model';
import { api } from 'src/services';
import './Post.css';

interface PostProps {
  match: any;
}

interface State {
  post: PostEntity;
}

class Post extends Component<PostProps, State> {
  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const { match: { params } } = this.props;
    try {
      const post = await api.Posts.findOne(params.id);
      this.setState({ post });
    } catch(e) {
      // tslint:disable-next-line
      console.error(e);
    }
  }

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
