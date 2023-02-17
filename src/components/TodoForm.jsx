import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { create } from "../redux/modules/todos";

const TodoForm = () => {
    const todos = useSelector((state) => {
        return state.todos;
    });

    const [todo, setTodo] = useState({
        id: 0,
        title: "",
        body: "",
        isDone: false,
    });

    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };

    const addTodos = (e) => {
        e.preventDefault();

        let id = todos.length == 0 ? 1 : todos[todos.length - 1].id + 1;

        if (todo.title.trim() === "" || todo.body.trim() === "") return;

        dispatch(create({ ...todo, id }));
        setTodo({
            id: 0,
            title: "",
            body: "",
            isDone: false,
        });
    };

    return (
        <TodoFormBox onSubmit={addTodos}>
            <Inputs>
                <label>제목 : </label>
                <InputBox
                    type='text'
                    name='title'
                    value={todo.title}
                    onInput={onChangeHandler}
                />
                <label>내용 : </label>
                <InputBox
                    type='text'
                    name='body'
                    value={todo.body}
                    onChange={onChangeHandler}
                />
            </Inputs>
            <AddBtns>추가하기</AddBtns>
        </TodoFormBox>
    );
};

export default TodoForm;

const TodoFormBox = styled.form`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    background-color: #eee;
    border-radius: 12px;
    padding: 30px;
`;

const Inputs = styled.div`
    font-weight: bold;
    align-items: center;
    display: flex;
    gap: 20px;
`;

const InputBox = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`;

const AddBtns = styled.button`
    background-color: teal;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
`;
