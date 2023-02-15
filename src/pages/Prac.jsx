import React, { useState } from "react";

function Prac() {

    //inputs

    const [inputName, setInputName] = useState('');
    const [price, setPrice]  = useState(0);

    const numberComma = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(',',""));
        setPrice(removedCommaValue.toLocaleString());
    }

    const nameChangeHandler = (e) => {
        setInputName(e.target.value);
    }

    const submitHandler = () => {
        const newInputs = {
            name: inputName,
            price,
        };

        let resultString = "";
        for(const [key, value] of Object.entries(newInputs)){
            resultString += `${key} : ${value}\n`
        }

        alert(resultString)
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
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label>이름</label>
                        <input type="text"
                        value={inputName}
                        onChange={nameChangeHandler}
                        />
                    </div>
                    <div>
                        <label>가격</label>
                        <input type="text"
                        value={price}
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
