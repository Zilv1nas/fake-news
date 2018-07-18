import React, { Component } from 'react';
import { Posts, AddPost } from './components/posts';
import { api } from './services';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const posts = await api.Posts.all();
    this.setState({ posts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">💩 ~ Fake News ~ 💩</h1>
        </header>
        <AddPost />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
