import React from "react";
import './style.css';
import Todo from "../todo/Todo";

const List = (props) => {
    // console.log(props)
    return (
        <div className="list-container">
            <p className="text"> Working... 🔥</p>
            <div>
                {props.contents.map((content, idx) => { 
                    // console.log(content.isDone)
                    if (content.isDone === false) {
                        return (
                            <Todo className="working-box" setContents={props.setContents} container={props.contents}
                                doneButton={content.doneButton} title={content.title} mapContent={content} body={content.body}
                                key={idx} isDone={content.isDone} />
                        )} 
                })} 
            </div>

            <p className="text">Done ..! 🎉</p>
            <div>
                {props.contents.map((content, idx) => { 
                    if (content.isDone === true) {
                        return (
                        <Todo className="working-box" setContents={props.setContents} container={props.contents}
                            doneButton={content.doneButton} title={content.title} mapContent={content} body={content.body}
                            key={idx} isDone={content.isDone} />
                        )} 
                })}
            </div>

        </div>
    )
}

export default List;

