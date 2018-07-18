import React, { Component } from 'react';
import { Posts, AddPost } from './components/posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">💩 ~ Fake News ~ 💩</h1>
        </header>
        <AddPost />
        <Posts />
      </div>
    );
  }
}

export default App;
