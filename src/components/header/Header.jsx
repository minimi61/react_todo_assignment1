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
            ...inputs,
            id: props.content.length,
            isDone: false,
        }
        props.setContent([...props.content, data])
    }
    return (
        <div className="headers">
            <div className="inputs">
                <div className="inputs-title">
                    <p>제목</p>
                    <input onChange={onChange} name='title' type='text'  ></input>
                </div>
                <div className="inputs-content">
                    <p>내용</p>
                    <input onChange={onChange} name='content' type='text' ></input>
                </div>
            </div>
            <button onClick={addContent}>추가하기</button>
        </div>
    )

}

export default Header;
// value={contentValue}

    // const [titleValue, setTitleValue] = useState('');
    // const onChange = (e) => {
    //     // console.log(e.target.value);
    //     setTitleValue(e.target.value)
    // }
    // const [contentValue, setContentValue] = useState('')
    // const onChangeContent = (e) => {
    //     // console.log(e.target.value);
    //     setContentValue(e.target.value)
    // }

            // // arr.push({
        //     title: inputs.title,
        //     content : inputs.content
        // })
        // // props.setContent(arr)
        // setArr1(arr)