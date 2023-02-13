import React, { useState } from "react";
import "./todoForm.css";

const TodoForm = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    };

    const addTodos = (e) => {
        e.preventDefault();

        // 첫번째 생각
        // todo들의 id값들을 배열로 만들고 sort해서 max값 + 1
        // console.log(test.sort()[test.length-1] + 1);

        // 두번째 생각 - 어차피 sort()안해도 todos가 정렬되어서 나옴..!
        // old todos가 항상 앞에있고, newTodos가 뒤에 들어가니까 당연히..?
        // todos의 제일 마지막 값은 제일 마지막에 추가한 todo이다. 항상 todo의 id에서 +1을 할 것!
        // todos의 제일 마지막 todo를 꺼내서 그 id에 +1을 하면 됨.
        // todos[마지막인덱스]의 id + 1
        // console.log(todos[todos.length -1].id + 1)
        // 근데 이렇게 하면 전체 삭제를 했을때 id값이 사라져서 카드 추가가 안된다..!
        // 조건문 걸어줘서, 배열의 길이가 0일때는 id값 1로 넣어주기!
        

        //아래는 내가 id에 넣었던 것 들
        //todos.length + 1,
        //todos[todos.length -1].id + 1,
        //todos.length == 0 ? 1 : todos[todos.length -1].id + 1,

        const newTodos = {
            id: todos.length == 0 ? 1 : todos[todos.length -1].id + 1,
            title,
            body,
            isDone: false,
        };

        if (title == "") {
            alert("제목을 입력하세요!");
        } else if (body == "") {
            alert("내용을 입력하세요!");
        } else {
            setTodos([...todos, newTodos]);
        }
        setTitle(""); //추가하고 제목인풋창 클리어
        setBody(""); //추가하고 내용인풋창 클리어
    };

    console.log(todos.map((e) => e.id));
    // 위의 콘솔로 id값 확인하기!
    
    return (
        <form className="todoForm" onSubmit={addTodos}>
            <div className="inputs">
                <label>제목 : </label>
                <input
                    className="inputbox"
                    type="text"
                    value={title}
                    onInput={titleChangeHandler}
                />
                <label>내용 : </label>
                <input
                    className="inputbox"
                    type="text"
                    value={body}
                    onChange={bodyChangeHandler}
                />
            </div>
            <button className="addBtn">추가하기</button>
        </form>
    );
};

export default TodoForm;
