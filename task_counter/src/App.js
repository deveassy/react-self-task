import React, { Component } from "react";
import styled from "styled-components";
import "./styles.css";

class App extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  handleReset = () => {
    this.setState({
      number: 0
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.number === 10) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Container>
        <P>COUNTER</P>
        <P num>{this.state.number}</P>
        <Button inc onClick={this.handleIncrease}>
          +
        </Button>
        <Button onClick={this.handleDecrease}>-</Button>
        <Button onClick={this.handleReset}>reset</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 300px;
  padding: 5px 0 20px;
  margin: 0 auto;
  border: 2px solid #adb5bd;
  text-align: center;
`;

const P = styled.p`
  font-size: 25px;
  font-weight: 800;
  color: ${props => (props.num ? "#6c5ce7" : "#a29bfe")};
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 20px;
  font-weight: 800;
  border-radius: 30px;
  border-style: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.inc ? "#5c7cfa" : "#fa5252")};
`;

export default App;
