import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 512px;
  height: 768px;
  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
