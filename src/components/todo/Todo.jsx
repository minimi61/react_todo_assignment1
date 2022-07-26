import React,{useState} from "react";
import './style.css';


const Todo = (props) => {
    // const [content, setContent] = useState('')
    console.log(props.content.title)
    return (
        <div>
            <div className="working-box">
                <h3>{props.content.title}</h3>
                <p>{props.content.content}</p>
                <div className="list-buttons">
                    <button type="button">삭제하기</button>
                    <button type="button">완료</button>
                </div>
            </div>
        </div>
      
    )
}

export default Todo;


