import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";


function Details() {

    const todos = useSelector((state) => {
        return state.todos;
    });

    const params = useParams();
    // console.log(params.id);


    const foundTodos = todos.find((todo) => {
        // console.log(todo.id);
        return todo.id === parseInt(params.id);
    })

    // console.log(foundTodos);

    return (
        <>
        <Layout>
        {foundTodos.title}
        </Layout>
        
        </>
    );
}

export default Details;
