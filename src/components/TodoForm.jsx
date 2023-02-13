import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { create } from "../redux/modules/todos";

const TodoForm = () => {
    const todos = useSelector((state) => {
        return state.todos;
    });

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    };

    const addTodos = (e) => {
        e.preventDefault();

        let id = todos.length == 0 ? 1 : todos[todos.length -1].id + 1;

        if (title == "") {
            alert("제목을 입력하세요!");
        } else if (body == "") {
            alert("내용을 입력하세요!");
        } else {
            dispatch(create(id,title,body));
        }
        setTitle(""); 
        setBody(""); 
    };
    
    return (
        <TodoFormBox onSubmit={addTodos}>
            <Inputs>
                <label>제목 : </label>
                <InputBox
                    type="text"
                    value={title}
                    onInput={titleChangeHandler}
                />
                <label>내용 : </label>
                <InputBox
                    type="text"
                    value={body}
                    onChange={bodyChangeHandler}
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