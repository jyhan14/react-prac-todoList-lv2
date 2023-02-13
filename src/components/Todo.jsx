import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteAction, updateAction } from "../redux/modules/todos";

const Todo = ({todo}) => {
    const todos = useSelector((state) => {
        return state.todos;
    });
    const dispatch = useDispatch();

    const deleteTodos = (id) => {
        dispatch(deleteAction(id));
    }

    const updateTodos = (id) => {
        dispatch(updateAction(id));
    }

    return (
        <TodoContainer>
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>

            <BtnsBox>
                <Btn
                borderColor="red"
                onClick={() => deleteTodos(todo.id)}>삭제</Btn>
                <Btn
                borderColor="green"
                className="doneBtn"
                onClick={() => updateTodos(todo.id)}>{todo.isDone ? "취소" : "완료"}</Btn>
            </BtnsBox>
        </TodoContainer>
    );
};

export default Todo;

const TodoContainer = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`;

const BtnsBox = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`;

const Btn = styled.button`
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;

    background-color: #fff;
    border: 2px solid ${(props) => props.borderColor}
`;

