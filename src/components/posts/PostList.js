import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { posts } from '../../actions';
import { Posts, AddPost } from '.';
import { Loader } from '..';

class PostList extends Component {
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    this.props.loadPosts();
  }

  handleAdd = (post) => {
    this.props.addPost(post);
  };

  renderPosts = () => {
    const { posts } = this.props;
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

const mapStateToProps = state => ({
  posts: state.posts.postList,
});

export default connect(mapStateToProps, {
  loadPosts: posts.loadPosts,
  addPost: posts.addPost,
})(PostList);
