import React from "react";
import "./todoItems.css";
import Todo from "../todo/Todo";

const TodoItems = ({ todos, setTodos }) => {
    const deleteTodos = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const updateTodos = (id) => {
        //https://react.vlpt.us/basic/15-array-modify.html 참고
        // todos를 map으로 풀어주고, 그 안의 값들 중 todo.id가 받아온 id와 같을때,
        // todo를 풀어주고, isDone을 반대의 값을 넣어준다.
        // 같지않을때는 그냥 todo(냅두기)
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    return (
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
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
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">
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
            </div>
        </div>
    );
};

export default TodoItems;
