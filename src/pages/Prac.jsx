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

    //--------------------------------------------------------

    return (
        <>
            <div>
                <h1>Button</h1>
                <BtnBox>
                    <Btns
                        backgroundColor="rgb(255, 255, 255)"
                        border="3px solid rgb(85, 239, 196)"
                        height="50px"
                        width="200px"
                        fontWeight="600"
                        onClick={() => {
                            alert("버튼을 만들어보세요!");
                        }}
                    >
                        <BtnArrow>
                            Large Primary Button
                          
                        </BtnArrow>
                    </Btns>

                    <Btns
                        backgroundColor=" rgb(85, 239, 196)"
                        border="none"
                        height="45px"
                        width="130px"
                    >
                        Medium
                    </Btns>
                    <Btns
                        backgroundColor=" rgb(85, 239, 196)"
                        border="none"
                        height="40px"
                        width="100px"
                    >
                        Small
                    </Btns>
                </BtnBox>
                <BtnBox>
                    <Btns
                        backgroundColor="rgb(255, 255, 255)"
                        border="3px solid rgb(250, 177, 160)"
                        height="50px"
                        width="200px"
                        fontWeight="600"
                        onClick={() => {
                            window.prompt("어렵나요?");
                        }}
                    >
                        <BtnArrow>
                            Large Primary Button
                           
                        </BtnArrow>
                    </Btns>
                    <Btns
                        backgroundColor=" rgb(250, 177, 160)"
                        border="none"
                        height="45px"
                        width="130px"
                    >
                        Medium
                    </Btns>
                    <Btns
                        backgroundColor="rgb(250, 177, 160)"
                        border="none"
                        height="45px"
                        width="100px"
                    >
                        Small
                    </Btns>
                </BtnBox>
            </div>
            <h1>Input</h1>
            <form onSubmit={submitHandler}>
                <DivBox>
                    <div>
                        <label>이름</label>
                        <InputBox
                            type="text"
                            value={inputName}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div>
                        <label>가격</label>
                        <InputBox
                            type="text"
                            value={price}
                            onChange={numberComma}
                        />
                    </div>
                    <button>저장</button>
                </DivBox>
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
                <SelectBorderBox>
                    <h1>Select</h1>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ position: "relative" }}>
                            <SelectBox/>
                        </div>
                        <div style={{ position: "relative" }}>
                            <SelectBox/>
                        </div>
                    </div>
                </SelectBorderBox>
            </div>
        </>
    );
}

//------------------------------------------------------
const BtnBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const Btns = styled.button`
    border: ${(props) => props.border};
    cursor: pointer;
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor};
    color: rgb(0, 0, 0);
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    font-weight: ${(props) => props.fontWeight};
`;

const BtnArrow = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 7px;
`;

//---------------------------

const DivBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

const InputBox = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`;

//---------------------------------------------------------------------------

function Modal({ setModal }) {
    const closeModal = () => {
        setModal(false);
    };

    const confirmModal = () => {
        console.log("on!!");
    };

    return (
        <ModalBox>
            <p>모달창 테스트!</p>
            <button onClick={closeModal}>닫기</button>
            <button onClick={confirmModal}>확인</button>
        </ModalBox>
    );
}

function Modal2({ setModal2 }) {
    const closeModal = () => {
        setModal2(false);
    };

    //모달창을 useRef로 취득
    const modalRef = useRef(null);

    useEffect(() => {
        const handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModal2(false);
            }
        };
        // 이벤트 핸들러 등록
        document.addEventListener("mousedown", handler);

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener("mousedown", handler);
        };
    });

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
    width: 800px;
    height: 500px;

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
    background-color: lightblue;
    border-radius: 10px;
`;

const ModalClose = styled.button`
    /* 모달창 내부 X버튼 */

    position: absolute;
    right: 10px;
    top: 10px;
`;

//---------------------------------------------------------------------------
const OPTIONS = [
    { value: "react", name: "리액트" },
    { value: "java", name: "자바" },
    { value: "spring", name: "스프링" },
    { value: "reactNative", name: "리액트네이티브" },
];

const SelectBox = ({ options }) => {
    // console.log(options[0].value);
    // console.log(
    //     options.map((o) => {
    //         return o.name;
    //     })
    // );
    return (
        <Select>
            <option style={{backgroundColor:"red"}}>
                ddasd
            </option>
            {/* {options.map((option) => {
                return <Option key={option.value}>{option.name}</Option>;
            })} */}
        </Select>
    );
};

const Select = styled.select`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
`;

// const Options = styled.option`
//     color: red;
// `


const SelectBorderBox = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
`;
