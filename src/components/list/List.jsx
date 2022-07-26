import React from "react";
import './style.css';
import Todo from "../todo/Todo";

const List = (props) => {
    // console.log(props.content)
    return (
        <div className="list-container">
            <p className="text"> Working... 🔥</p>
            <div>
                {/* <div className="working-box">
                    <h3>리액트 공부하기</h3>
                    <p>리액트 기초를 공부한다</p>
                    <div className="list-buttons">
                        <button type="button">삭제하기</button>
                        <button type="button">완료</button>
                    </div>
                </div> */}
                <Todo className="working-box" content={props.content} />
            </div>
            
            <p className="text">Done ..! 🎉</p>
            <div>
               
                <div className="working-box">
                    <h3>리액트 공부하기</h3>
                    <p>리액트 기초를 공부한다</p>
                    <div className="list-buttons">
                        <button type="button">삭제하기</button>
                        <button type="button">취소</button>
                    </div>
                </div>
            </div>
           
         </div>
    )
}

export default List;