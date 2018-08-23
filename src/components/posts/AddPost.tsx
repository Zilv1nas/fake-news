import React, { ChangeEvent, Component, FormEvent, } from "react";
import { PostEntity } from "src/model";
import "./AddPost.css";

interface Props {
  handleAdd: ({ title, body }: { title: string, body: string }) => Promise<PostEntity>;
}

export default class AddPost extends Component<Props, {}> {
  state = {
    form: {
      body: "",
      title: "",
    }
  }

  handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLTextAreaElement;
      this.setState({
        form: { ...this.state.form, [target.name]: target.value }
      });
  };

  resetInput = () => {
    this.setState({ form: { title: "", body: "" } });
  };

  handleAdd = async () => {
    await this.props.handleAdd(this.state.form);
    this.resetInput();
  };

  onSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className="AddPost" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.form.title}
          onChange={this.handleChange}
          name="title"
          placeholder="📖 Fake the title"
          className="AddPost-input"
        />
        <textarea
          rows={3}
          value={this.state.form.body}
          onChange={this.handleChange}
          name="body"
          placeholder="What's on your mind?"
          className="AddPost-input"
        />

        <button type="button" onClick={this.handleAdd}>
          Post
        </button>
      </form>
    );
  }
}