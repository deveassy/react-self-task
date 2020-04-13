import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px 32px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="컴포넌트 생성하기" done={true}/>
            <TodoItem text="문제 해결하기" done={true}/>
            <TodoItem text="초콜렛 사먹기" done={true}/>
            <TodoItem text="공부에 집중하기" done={false}/>
        </TodoListBlock>
    );
}

export default TodoList;