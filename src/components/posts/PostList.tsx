import { inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import { Loader } from 'src/components';
import { AddPostEntity, PostEntity } from 'src/model';
import { PostListType } from 'src/stores/PostList';
import AddPost from './AddPost';
import PostListItem from './PostListItem';

interface PostListProps {
  posts: PostEntity[]
  loadAll: () => void;
  add: ({}: AddPostEntity) => Promise<PostEntity>;
}

const mapStoresToProps = (stores: any) => {
  const { posts, add, loadAll } = stores.postList as PostListType
  return { posts, add, loadAll };
};

@inject(mapStoresToProps)
@observer
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
        {this.renderPosts()}
      </Fragment>
    );
  }
}

export default PostList