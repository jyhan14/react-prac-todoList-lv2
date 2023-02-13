import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

import Details from "../pages/Details";
import TodoList from "../pages/TodoList";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
