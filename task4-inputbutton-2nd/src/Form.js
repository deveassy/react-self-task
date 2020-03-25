import React, { Component } from "react";

export default class Form extends Component {
  state = {
    inputText: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      inputText: ""
    });
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      inputText: this.state.inputText
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="inputText"
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder="What do you want to write here?"
        />
        <br />
        <button onClick={this.handleClick}>입력</button>
        <button>초기화</button>
      </form>
    );
  }
}
