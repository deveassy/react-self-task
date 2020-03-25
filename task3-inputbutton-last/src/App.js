import React, { Component } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 7px 15px;
  margin: 0 3px;
  border-radius: 5px;
  background-color: ${props => props.color};
  color: white;
  font: 15px bold;
`;

class Button extends React.Component {
  render() {
    const { color, onClick, children } = this.props;
    return (
      <ButtonStyle color={color} onClick={onClick}>
        {children}
      </ButtonStyle>
    );
  }
}

class App extends Component {
  state = {
    text: "",
    result: ""
  }; // 입력되는 부분과 출력되는 부분에 다르게 state를 주어야 함

  handleChange = e => {
    this.setState({
      text: e.target.value
    }); //
  };
  handleSubmit = () => {
    this.setState({
      result: this.state.text
    });
  };
  handleReset = () => {
    this.setState({
      text: "",
      result: ""
    });
  };
  render() {
    return (
      <Container>
        <Content>{this.state.result}</Content>
        <div>
          <Input
            type="text"
            placeholder="Write Here..."
            value={this.state.text}
            onChange={this.handleChange}
          />
          <Button color="#546de5" onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button color="#e77f67" onClick={this.handleReset}>
            Reset
          </Button>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  height: 250px;
  margin: 0 auto;
  border: 2px solid #34495e;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
  border: 1px solid #34495e;
`;
const Input = styled.input`
  width: 200px;
  padding: 6px;
  margin: 30px 20px 0 50px;
`;

export default App;
