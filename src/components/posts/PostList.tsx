import { inject, Observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import { Loader } from 'src/components';
import { AddPostEntity, PostEntity } from 'src/model';
import AddPost from './AddPost';
import PostListItem from './PostListItem';

interface PostListProps {
  posts: [PostEntity]
  loadAll: () => void;
  add: ({}: AddPostEntity) => Promise<PostEntity>;
}

class PostList extends Component<PostListProps, {}> {
  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    this.props.loadAll();
  };

  handleAdd = (post: AddPostEntity) : Promise<PostEntity> => {
    return this.props.add(post);
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