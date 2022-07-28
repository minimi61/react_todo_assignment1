import React, { useState } from "react";
// import { useRef } from "react";
import './style.css';

const Header = (props) => {
    const [inputs, setInputs] = useState();
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    const addContent = () => {
        let data = {
            id: props.contents.length,
            ...inputs,
            isDone: false,
            doneButton: '완료'
        }
        props.setContents([...props.contents, data]);
        const inputId = document.getElementById('inputId');
        const inputContent = document.getElementById('inputContent');
        inputId.value = '';
        inputContent.value=''
    }
    return (
        <div className="headers">
            <div className="inputs">
                <div className="inputs-title">
                    <p>제목</p>
                    <input id="inputId" onChange={onChange} name='title' type='text'  ></input>
                </div>
                <div className="inputs-content">
                    <p>내용</p>
                    <input id="inputContent" onChange={onChange} name='body' type='text' ></input>
                </div>
            </div>
            <button onClick={addContent}>추가하기</button>
        </div>
    )

}

export default Header;
