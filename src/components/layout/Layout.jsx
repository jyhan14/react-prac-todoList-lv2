import React from "react";
import './layout.css';

function Layout(props) {
    return (
        <>
        <div className="layout">
            <div className="header">   
                <div>My TodoList</div>
                <div>React</div>
            </div>
            <div>
            {props.children}
            </div>
        </div>
        
        </>
    );
}

export default Layout;
