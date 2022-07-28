import React from "react";
import './style.css';
import Todo from "../todo/Todo";

const List = (props) => {
    const contentIsDoneFalse = props.contents.filter(content => !content.isDone);
    const contentIsDoneTrue = props.contents.filter(content => content.isDone)

    console.log(contentIsDoneFalse)
    console.log(contentIsDoneTrue)

    return (
        <div className="list-container">
            <p className="text"> Working... 🔥</p>
            <div>
                {contentIsDoneFalse.map((content, idx) => { 
                        return (
                            <Todo className="working-box" setContents={props.setContents} container={props.contents}
                                title={content.title} mapContent={content} body={content.body}
                                key={idx} isDone={content.isDone} />
                        )} 
                )}
            </div>

            <p className="text">Done ..! 🎉</p>

            <div>
                {contentIsDoneTrue.map((content, idx) => { 
                        return (
                        <Todo className="working-box" setContents={props.setContents} container={props.contents}
                             title={content.title} mapContent={content} body={content.body}
                            key={idx} isDone={content.isDone} />
                        )} 
                )}
            </div>

        </div>
    )
}

export default List;

