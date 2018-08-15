import { decorate, observable, action } from 'mobx';
import { api } from '../services';

class Posts {
  posts = [];
  loadAll = async () => {
    const posts = api.Posts.all(); 
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


export default decorate(Posts, {
  loadAll: action,
  add: action,
  posts: observable,
});