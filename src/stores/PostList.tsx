import { action, observable } from 'mobx';
import { AddPostEntity, PostEntity } from 'src/model';
import { api } from 'src/services';

interface PostListType {
  posts: PostEntity[];
  loadAll: () => void;
  add: (post: AddPostEntity) => void;
}

class PostList implements PostListType {
  @observable
  posts: PostEntity[] = [];

  @action
  loadAll = async () => {
    const posts = await api.Posts.all();
    this.posts = posts;
  };

  @action
  add = async (post: AddPostEntity) => {
    try {
      const response = await api.Posts.add(post);
      this.posts = [response, ...this.posts];
    } catch (e) {
      // tslint:disable-next-line
      console.error(e);
    }
  };
}


export { PostListType };
export default PostList;