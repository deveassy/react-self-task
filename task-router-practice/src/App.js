import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Page = ({ title }) => {
  return (
    <>
      <div>{title}</div>
      <Link to="/">홈으로 가기</Link>
    </>
  );
};

const Nopage = () => {
  return <div>존재하지 않는 경로입니다. 404</div>;
};

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <HeaderContainer>
          <Link to="/">Home</Link>
          <Link to="/button">Button</Link>
          <Link to="/text-input">TextInput</Link>
        </HeaderContainer>
        <Switch>
          <Route path="/" exact render={() => <Page title="Home" />} />
          <Route path="/button" exact render={() => <Page title="Button" />} />
          <Route
            path="/text-input"
            exact
            render={() => <Page title="TextInput" />}
          />
          <Route component={Nopage} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid #000;
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  border: 1px solid red;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
