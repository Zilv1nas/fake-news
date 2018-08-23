import { inject, Observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import Loader from '../Loader';
import AddPost from './AddPost';
import PostListItem from './PostListItem';

class PostList extends Component {
  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    this.props.loadAll();
  };

  handleAdd = post => {
    this.props.add(post);
  };

  renderPosts = () => {
    const { posts } = this.props;

    if (posts) {
      return posts.map(post => <PostListItem key={post.id} post={post} />)
    }

    return <Loader />;
  };

  render() {
    return (
      <Fragment>
        <AddPost handleAdd={this.handleAdd} />
        <Observer>{() => this.renderPosts()}</Observer>
      </Fragment>
    );
  }
}

export default inject(stores => {
  const { posts, add, loadAll } = stores.postList;
  return { posts, add, loadAll };
})(PostList);