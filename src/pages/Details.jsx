import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import styled from "styled-components";

function Details() {
    const todos = useSelector((state) => {
        return state.todos;
    });

    const params = useParams();
    // console.log(params.id);

    const foundTodos = todos.find((todo) => {
        // console.log(todo.id);
        return todo.id === parseInt(params.id);
    });

    // console.log(foundTodos);

    const navigate = useNavigate();

    return (
        <>
            <Layout>
                <BoxLayout>
                    <DetailsBox>
                        <div>
                            <IdBox>
                                <div>ID: {foundTodos.id}</div>
                                <Btn onClick={() => {
                                    navigate('/');
                                }}>이전으로</Btn>
                            </IdBox>
                            <Title>{foundTodos.title}</Title>
                            <Body>{foundTodos.body}</Body>
                        </div>
                    </DetailsBox>
                </BoxLayout>
            </Layout>
        </>
    );
}

export default Details;

const BoxLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`;

const DetailsBox = styled.div`
    margin: 0 auto;
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    text-align: justify;
    justify-content: space-between;
`;

const IdBox = styled.div`
    display: flex;
    height: 80px;
    text-align: justify;
    justify-content: space-between;
    padding: 0px 24px;
    -webkit-box-align: center;
    align-items: center;
`;

const Title = styled.h1`
    display: block;
    padding: 0px 24px;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

const Body = styled.div`
    padding: 0px 24px;
`;

const Btn = styled.button`
        border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`;