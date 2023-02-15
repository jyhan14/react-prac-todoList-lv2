import React, { useState } from "react";
import styled from "styled-components";

function Prac() {
    //--------------------------------------------------------
    //inputs

    const [inputName, setInputName] = useState("");
    const [price, setPrice] = useState(0);

    const numberComma = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(",", ""));
        setPrice(removedCommaValue.toLocaleString());
    };

    const nameChangeHandler = (e) => {
        setInputName(e.target.value);
    };

    const submitHandler = () => {
        const newInputs = {
            name: inputName,
            price,
        };

        let resultString = "";
        for (const [key, value] of Object.entries(newInputs)) {
            resultString += `${key} : ${value}\n`;
        }

        alert(resultString);
    };
    //--------------------------------------------------------

    //Modal, 아래 Modal component와 연결!
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    };

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
                        <input
                            type="text"
                            value={inputName}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div>
                        <label>가격</label>
                        <input
                            type="text"
                            value={price}
                            onChange={numberComma}
                        />
                    </div>
                    <button>저장</button>
                </div>
            </form>
            <div>
                <h1>Modal</h1>
                <div>
                    <button onClick={showModal}>open modal</button>
                    {modal && <Modal setModal={setModal} />}
                </div>
                <div>
                    <button onClick={showModal}>open modal</button>
                    {modal && <Modal2 setModal={setModal} />}
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
    );
}

function Modal({ setModal }) {
    const closeModal = () => {
        setModal(false);
    };

    return (
        <ModalBox>
            <ModalClose onClick={closeModal}>x</ModalClose>
            <p>모달창 테스트!</p>
        </ModalBox>
    );
}

function Modal2({setModal}) {
    const closeModal = () => {
        setModal(false);
    };

    return (
        <ModalBox>
            <ModalClose onClick={closeModal}>x</ModalClose>
            <p>모달창 테스트222</p>
        </ModalBox>
    );
}

export default Prac;

const ModalBox = styled.div`
    /* 모달창 크기 */
    width: 300px;
    height: 200px;

    /* 최상단 위치 */
    z-index: 999;

    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* 모달창 디자인 */
    background-color: gray;
    border: 1px solid black;
    border-radius: 8px;
`;

const ModalClose = styled.button`
    /* 모달창 내부 X버튼 */

    position: absolute;
    right: 10px;
    top: 10px;
`;
