import React, { useState } from "react";
import styled from "styled-components";

export default function App() {

  const [state, setState] = useState({
    id:'',
    password:'',
    password2:'',
    name:'',
    email:''
  });

  function handleChange(e) {
    const updateState = {
    ...state, //state의 모든 값들을 가지고 와서
    [e.target.name] : e.target.value //모든 input의 name값들에 대한 value값을 표시
    };
    setState(updateState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
    <SignIn>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="id"
          value={state.id}
          onChange={handleChange}
          placeholder="id"
        />
        <input
          type="password"
          name="pwd"
          value={state.pwd}
          onChange={handleChange}
          placeholder="password"
        />
        <input
          type="password"
          name="pwd2"
          value={state.pwd2}
          onChange={handleChange}
          placeholder="confrim password"
          onBlur={() => alert("비밀번호를 확인해주세요") } // input창을 떠나게 될 때 메세지가 뜬다
        />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="email" // 이메일 형식이 맞지 않으면 경고창이 뜨게 되있음
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="e-mail"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </SignIn>
  );
}

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;