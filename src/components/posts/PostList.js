import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { posts } from "../../actions";
import AddPost from './AddPost';
import Post from './Post';
import Loader from '../Loader';

class PostList extends Component {
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    this.props.loadPosts();
  };

  handleAdd = post => {
    this.props.addPost(post);
  };

  renderPosts = () => {
    const { posts } = this.props;

    if (posts) {
      return posts.map(post => <Post key={post.id} post={post} />)
    }

    return <Loader />;
  };

  render() {
    return (
      <Fragment>
        {!this.props.isLimitReached && <AddPost handleAdd={this.handleAdd} />}
        {this.renderPosts()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.postList,
  isLimitReached: state.posts.isLimitReached
});

export default connect(
  mapStateToProps,
  {
    loadPosts: posts.loadPosts,
    addPost: posts.addPost
  }
)(PostList);
