import React, { useState } from "react";
import './style.css';


const Todo = ({ container, title, mapContent, setContents, body,doneButton }) => {
    // const [cancelBtn, setCancelBtn] = useState('완료');
    

  const deleted = () => {
    // 1.  기존에 container 복사본에서 현재 지우고자 하는 content의 id와 같지 않은 데이터만 filter로 반환
      const newContents = [...container].filter((newCon) => newCon.id !== mapContent.id);
      
    // 2. 새로 만든 배열을 setContent로 업데이트
    setContents(newContents);
  };
    const finished = () => {
        
        const changeIsDone = [...container].filter((newState) => {
           
            if (newState.doneButton === '취소') {
                newState.isDone = false;
                newState.doneButton = '완료';
                return newState
            }
            if (newState.id === mapContent.id) {
                newState.isDone = true;
                newState.doneButton = '취소';
                return newState
            }
        })
    //    console.log(changeIsDone)
        setContents([...container, changeIsDone]);
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
            {doneButton}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
// import React,{useState} from "react";
// import './style.css';


// const Todo = (props) => {
//     // console.log(props)
//     const [doneChange, setDonechange] = useState(false);

//     const deleted = () => {
//         let newContent = [...props.container];
//         newContent.map((content) => {
//             // console.log('test0',props.con.id !== content.id)
//             if (props.con.id !== content.id) {
//                 return content ;
//             } 
            
//         })
//         console.log('test', newContent, props.con)
//         props.setContent(newContent)
//     }

//     const finished = () => {
//         console.log('완료');
//         // setDonechange(true)
//     }
//     // console.log(props.doneChange)

//     return (
//         <div>
//             <div className="working-box">
//                 <h3>{props.title}</h3>
//                 <p>{props.content}</p> 
//                 <div className="list-buttons">
//                     <button type="button" onClick={deleted}>삭제하기</button>
//                     <button type="button" onClick={finished}>완료</button>
//                 </div>
//             </div>
//         </div>
      
//     )
// }

// export default Todo;


