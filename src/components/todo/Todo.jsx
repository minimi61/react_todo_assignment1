import React, { useState } from "react";
import './style.css';


const Todo = ({ container, title, mapContent, setContents, body, isDone }) => {
    
  // console.log(title, body)
  const deleted = () => {
    // 1.  기존에 container 복사본에서 현재 지우고자 하는 content의 id와 같지 않은 데이터만 filter로 반환
      const newContents = [...container].filter((newCon) => newCon.id !== mapContent.id);
      
    // 2. 새로 만든 배열을 setContent로 업데이트
    setContents(newContents);
  };

  //완료버튼
  const finished = () => {

    setContents([...container].map((todo) =>
      todo.id === mapContent.id ? { ...todo, isDone: !todo.isDone } 
      : todo
     ));

    }

    return (
    <div>
      <div className="working-box">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="list-buttons">
          <button type="button" onClick={deleted}>
            삭제하기
          </button>
          <button type="button" onClick={finished}>
            {isDone == false? '완료': '취소'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;


//위와 같은 내용

  // const changeIsDone = [...container].map((newState) => {
      //버튼이 취소일 때 
    // if (newState.id === mapContent.id && newState.doneButton === '취소') {
    //   newState.isDone = false;
    //   newState.doneButton = '완료';
    //   return newState
    // } 
    // //완료버튼을 누를때
    
    // if (newState.id === mapContent.id) {
    //   newState.isDone = true;
    //   newState.doneButton = '취소';
    //   return newState
    // } else {return newState}
    
    // })
    // setContents(changeIsDone);
        