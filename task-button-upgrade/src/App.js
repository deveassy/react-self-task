import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  width: 250px;
  border: 10px solid ${props => props.color};
  border-radius: 5px;
  padding: 20px 45px;
  margin: auto;
  margin-bottom: 15px;
  font: 800 30px "sans-serif"; /*style | varient | weight | size | family 순서로 적용*/
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

class Button extends React.Component {
  render() {
    const { color, children } = this.props;
    return <ButtonStyle color={color}>{children}</ButtonStyle>;
  }
}

export default function App() {
  return (
    <Container className="App">
      <P>"Button Styling"</P>
      <Button color="#34ace0">Submit</Button>
      <Button color="#ffb142">Edit</Button>
      <Button color="#ff5252">Reset</Button>
    </Container>
  );
}

const P = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  font: 800 30px "sans-serif";
`;
const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 5px solid #84817a;
`;
