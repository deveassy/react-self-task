import React, { Component } from "react";
import styled from "styled-components";
import InputButton from "./InputButton";

class App extends Component {
  handleCreate = data => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <Print onCreate={this.handleCreate} />
        <InputButton />
      </Container>
    );
  }
}
const Container = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid #adb5bd;
  margin: 0 auto;
`;
const Print = styled.div`
  width: 460px;
  height: 180px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 20px;
`;

export default App;
