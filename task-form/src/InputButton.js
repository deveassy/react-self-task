import React, { Component } from "react";
import styled from "styled-components";

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

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

  // handleCreate = () => {};

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="inputText"
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder="What do you want to write here?"
        />
        <br />
        <Button onClick={this.handleCreate}>입력</Button>
        <Button onClick={this.handleReset}>초기화</Button>
      </Form>
    );
  }
}
const Form = styled.form`
  display: flex;
  margin: 20px;
`;
const Input = styled.input`
  width: 320px;
  height: 35px;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
`;

export default InputButton;
