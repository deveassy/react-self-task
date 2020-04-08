import React, { useState, useEffect } from "react";
import styled from "styled-components";

const [id, setId] = useState("");
const [pasw, setPasw] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
  console.log({
    id,
    pasw,
    name,
    email
  });
});

export default function App(props) {
  return (
    <SignIn>
      <input value={id} onChange={onChangeId} placeholder="id" />
      <input value="pasw" type="password" placeholder="password" />
      <input
        value="confirmPasw"
        type="password"
        placeholder="confrim password"
      />
      <input value="name" placeholder="name" />
      <input value="email" placeholder="e-mail" />
      <button onClick={() => setSubmit(console.log(submit))}>SUBMIT</button>
    </SignIn>
  );
}

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`;
