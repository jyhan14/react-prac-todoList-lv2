import { useState } from "react";
import Layout from "../components/layout/Layout";
import TodoForm from "../components/todoForm/TodoForm";
import TodoItems from "../components/todoItems/TodoItems";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "삭제기능 구현하기",
            body: "2/7일까지 완료해야합니다.",
            isDone: false,
        },

        {
            id: 2,
            title: "추가기능 구현하기",
            body: "2월 6일까지 완료해야합니다.",
            isDone: true,
        },
    ]);

    return (
        <div>
            <Layout>
                <TodoForm todos={todos} setTodos={setTodos} />
                <TodoItems todos={todos} setTodos={setTodos} />
            </Layout>
        </div>
    );
};

export default TodoList;