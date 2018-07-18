import React, { Component } from 'react';
import { api } from '../../services';
import './AddPost.css';

class AddPost extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  resetInput = () => {
    this.setState({
      title: '',
      body: ''
    });
  }

  handleAdd = async () => {
    const { title, body } = this.state;
    await api.Posts.add({ title, body });
    this.resetInput();
  }

  render() {
    return (
      <form className="AddPost">
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
          placeholder="📖 Fake the title"
          className="AddPost-input" />
        <textarea
          rows="3"
          value={this.state.body}
          onChange={this.handleChange}
          name="body"
          placeholder="What's on your mind?"
          className="AddPost-input" />

        <button type="button" onClick={this.handleAdd}>Post</button>
      </form>
    )
  }
}

export default AddPost;
