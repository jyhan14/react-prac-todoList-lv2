import React, { useEffect, useRef, useState } from "react";
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

    const [modal2, setModal2] = useState(false);

    const showModal2 = () => {
        setModal2(true);
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
                    <button onClick={showModal2}>open modal</button>
                    {modal2 && <Modal2 setModal2={setModal2} />}
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
    
    const confirmModal = () => {
        console.log('on!!');
    };

    return (
        <ModalBox>

            <p>모달창 테스트!</p>
            <button onClick={closeModal}>닫기</button>
            <button onClick={confirmModal}>확인</button>
        </ModalBox>
    );
}

function Modal2({setModal2}) {
    const closeModal = () => {
        setModal2(false);
    };

    //모달창을 useRef로 취득
    const modalRef = useRef(null);

    useEffect(() => {
        const handler = (event) => {
            if(modalRef.current && !modalRef.current.contains(event.target)){
                setModal2(false);
            }
        };
        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
        };
    })

    return (
        <ModalBox ref={modalRef}>
            <ModalClose onClick={closeModal}>x</ModalClose>
            <p>모달창 테스트222</p>
            <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요!</p>
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
