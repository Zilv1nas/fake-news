import { decorate, observable, action } from 'mobx';
import { api } from '../services';

class PostList  {
  posts = [];
  loadAll = async () => {
    const posts = await api.Posts.all(); 
    this.posts = posts;
  }
  add = async (post) => {
    try {
      const response = await api.Posts.add(post);
      this.posts = [response, ...this.posts];
    } catch (e) {
      console.error(e);
    }
  }
}


export default decorate(PostList, {
  loadAll: action,
  add: action,
  posts: observable,
});