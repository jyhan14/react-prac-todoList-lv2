import React from "react";
import styled from "styled-components";

function Layout(props) {
    return (
        <>
        <LayoutBox>
            <Header>   
                <div>My TodoList</div>
                <div>React</div>
            </Header>
            {props.children}
        </LayoutBox>
        
        </>
    );
}

export default Layout;

const LayoutBox = styled.div`
    margin: 10px auto auto;
    max-width: 1200px;
    min-width: 800px;
`;

const Header = styled.div`
    align-items: center;
    border: 1px solid #ddd;

    display: flex;
    justify-content: space-between;

    height: 50px;
    padding: 0 20px;
`;

