import { BrowserRouter, Route, Routes } from "react-router-dom";

import Details from "../pages/Details";
import TodoList from "../pages/TodoList";
import Prac from "../pages/Prac"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/prac" element={<Prac/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
