import React from "react";
import { useParams, Link } from "react-router-dom";
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
        ID: {foundTodos.id}<br/>
        Title :{foundTodos.title}<br/>
        {foundTodos.body}<br/>
        <Link to="/">이전으로</Link>
        </Layout>
        
        </>
    );
}

export default Details;
