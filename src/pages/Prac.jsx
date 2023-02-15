import React, { useState } from "react";

function Prac() {

    //inputs
    const [price, setPrice]  = useState(0);

    const numberComma = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(',',""));
        setPrice(removedCommaValue.toLocaleString());
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
            <form >
                <div>
                    <div>
                        <label>이름</label>
                        <input type="text"
                        />
                    </div>
                    <div>
                        <label>가격</label>
                        <input type="text"
                        name="price"
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
