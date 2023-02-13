import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";

const TodoList = () => {
    // 여기에서 store에 접근하여 todos의 값을 읽어오고 싶다!
    // useSelector

    const todos2 = useSelector((state) => {
        return state.todos;
    });

    console.log(todos2);

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