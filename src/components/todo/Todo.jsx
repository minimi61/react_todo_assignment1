import React,{useState} from "react";
import './style.css';


const Todo = (props) => {
    // console.log(props)
    const [doneChange, setDonechange] = useState(false);

    const deleted = () => {
        let newContent = [...props.container];
        newContent.filter((content, idx) => {
            console.log('test0',props.con.id !== content.id)
            if (props.con.id !== content.id) {
                return content ;
                // props.container.splice(props.myId, 1);
                // console.log('삭제한다', props.container);
            } 
            
        })
        console.log('test', newContent, props.con)
        props.setContent(newContent)
    }

    const finished = () => {
        console.log('완료');
        setDonechange(true)
    }
    // console.log(props.doneChange)

    return (
        <div>
            <div className="working-box">
                <h3>{props.title}</h3>
                <p>{props.content}</p> 
                <div className="list-buttons">
                    <button type="button" onClick={deleted}>삭제하기</button>
                    <button type="button" onClick={finished}>완료</button>
                </div>
            </div>
        </div>
      
    )
}

export default Todo;


