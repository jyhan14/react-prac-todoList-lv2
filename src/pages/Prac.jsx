import React, { useState } from "react";

function Prac() {

    //input
    const [num, setNum] = useState('');
    const [inputName, setInputName] = useState('');

    const numberComma = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(',',""));
        setNum(removedCommaValue.toLocaleString());
    }

    const formSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <div>
                <h1>Button</h1>
                <div>
                    <button>Large Primary Button</button>
                    <button>Medium</button>
                    <button>Small</button>
                </div>
                <div>
                    <button>Large Primary Button</button>
                    <button>Medium</button>
                    <button>Small</button>
                </div>
            </div>
            <h1>Input</h1>
            <form onSubmit={formSubmit}>
                <div>
                    <div>
                        <label>이름</label>
                        <input type="text"
                        value={inputName}/>
                    </div>
                    <div>
                        <label>가격</label>
                        <input type="text"
                        value={num}
                        onChange={numberComma}/>
                    </div>
                    <button>저장</button>
                </div>
            </form>
            <div>
                <h1>Modal</h1>
                <div>
                    <button>open modal</button>
                </div>
                <div>
                    <button>open modal</button>
                </div>
            </div>
            <div>
                <div>
                    <h1>Select</h1>
                    <div>
                        <div>
                            <button>select버튼?</button>
                        </div>
                        <div>
                            <button>select버튼? </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Prac;
