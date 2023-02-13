import React from "react";
import './todo.css';

const Todo = ({ todo, deleteTodos, updateTodos }) => {
    return (
        <div className="todoContainer">
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>

            <div className="btns button">
                <button 
                className="deleteBtn"
                onClick={() => deleteTodos(todo.id)}>삭제</button>
                <button 
                className="doneBtn"
                onClick={() => updateTodos(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
            </div>
        </div>
    );
};

export default Todo;
