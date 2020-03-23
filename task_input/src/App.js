import React, { Component } from "react";
import styled from "styled-components";
import Content from "./Content";

class App extends Component {
  handleCreate = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <P>PLEASE FILL IN THE BLANK</P>
        <Content onCreate={this.handleCreate} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 200px;
  height: 150px;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid black;
`;

const P = styled.div`
  margin: 8px 0 13px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`;

export default App;
