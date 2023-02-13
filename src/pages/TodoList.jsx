import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";

const TodoList = () => {

    return (
        <div>
            <Layout>
                <TodoForm />
                <TodoItems />
            </Layout>
        </div>
    );
};

export default TodoList;