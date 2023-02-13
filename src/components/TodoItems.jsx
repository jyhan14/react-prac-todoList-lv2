import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoItems = ({ todos, setTodos }) => {
    const deleteTodos = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const updateTodos = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    return (
        <TodoItemsBox>
            <Title>Working</Title>
            <ItemWrapper>
                {todos.map(function (todo) {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                deleteTodos={deleteTodos}
                                updateTodos={updateTodos}
                            />
                        );
                    }
                })}
            </ItemWrapper>
            <Title>Done</Title>
            <ItemWrapper>
                {todos.map(function (todo) {
                    if (todo.isDone) {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                deleteTodos={deleteTodos}
                                updateTodos={updateTodos}
                            />
                        );
                    } else return null;
                })}
            </ItemWrapper>
        </TodoItemsBox>
    );
};

export default TodoItems;

const TodoItemsBox = styled.div`
    padding: 0 24px;
`;

const Title = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bo;
`;
const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
