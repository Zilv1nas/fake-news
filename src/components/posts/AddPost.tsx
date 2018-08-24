import React, { Component } from 'react';
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
    await this.props.handleAdd({ title, body })
    this.resetInput();
  }

  render() {
    return (
      <form className="AddPost" onSubmit={e => e.preventDefault()}>
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
