import React from "react";
import './style.css';
import Todo from "../todo/Todo";

const List = (props) => {
    // console.log(props.content[0].id)
    return (
        <div className="list-container">
            <p className="text"> Working... 🔥</p>
            <div>
                {props.content.map((con, idx) => { 
                    return (
                        con.isDone == false?
                            <Todo className="working-box" setContent={props.setContent} container={props.content} title={con.title}
                               con={con} content={con.content} myId={con.id} key={idx} idx={idx} isDone={con.isDone} />
                        : null
                        )
                }
                )}
               
                
            </div>

            <p className="text">Done ..! 🎉</p>
            <div>
                    {/* {props.content.map((con, key) => {
                        return (
                            <Todo className="working-box" title={con.title} content={con.content} mykey={key} />
                         )}
                    )} */}
                {props.content.filter((con, idx) => {
                    return (
                        con.isDone == true ?  
                            <Todo className="working-box" container={props.content} title={con.title} content={con.content} myId={con.id} key={idx} idx={idx} isDone={con.isDone} />
                        : null
                    )
                })
                }
            </div>

        </div>
    )
}

export default List;

