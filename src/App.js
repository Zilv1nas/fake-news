import React, { Component } from 'react';
import { Posts, AddPost } from './components/posts';
import { api } from './services';
import './App.css';

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">💩 ~ Fake News ~ 💩</h1>
  </header>
);

class App extends Component {
  state = {
    posts: [],
    shoudCancel: false
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentWillUnmount() {
    this.shoudCancel = true;
  }

  loadPosts = async () => {
    const posts = await api.Posts.all();
    if (!this.shoudCancel) {
      this.setState({ posts });
    }
  }

  handleAdd = async({ title, body }) => {
    const post = await api.Posts.add({ title, body });
    this.setState({
      posts: [post, ...this.state.posts]
    });
  };


  render() {
    return (
      <div className="App">
        <Header />
        <AddPost handleAdd={this.handleAdd} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
