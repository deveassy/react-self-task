import React, { Component } from "react";
import styled from "styled-components";

class Content extends Component {
  state = {
    name: "",
    email: "",
    pwd: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      email: "",
      pwd: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="name"
        />
        <Input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="e-mail"
        />
        <Input
          name="pwd"
          type="password"
          value={this.state.pwd}
          onChange={this.handleChange}
          placeholder="password"
        />
        <Button>Submit</Button>
      </form>
    );
  }
}
const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 190px;
  padding: 3px;
  margin-bottom: 4px;
  border: 1px solid #adb5bd;
  background-color: #dee2e6;
  &:focus {
    outline: none;
    background-color: white;
  }
`;

const Button = styled.button`
  padding: 5px 13px;
  margin-top: 8px;
  border-style: none;
  border-radius: 2px;
  font-size: 13px;
  color: #f5f6fa;
  background-color: #40739e;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export default Content;
