import React, { Component } from 'react';
import { api } from '../../services';
import './AddPost.css';

class AddPost extends Component {
  handleAdd = async () => {
    await api.Posts.add({
      title: 'Some fake title',
      body: 'Hello world'
    });
  }

  render() {
    return (
      <form className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="📖 Fake the title"
          className="AddPost-input" />
        <textarea
          rows="3"
          name="body"
          placeholder="What's on your mind?"
          className="AddPost-input" />

        <button type="button" onClick={this.handleAdd}>Post</button>
      </form>
    )
  }
}

export default AddPost;
