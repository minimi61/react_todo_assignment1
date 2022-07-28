import React,{useState} from "react";
import './style.css';
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";

const Layout = () => {
    const [contents, setContents] = useState([{
            id:0,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부한다',
            isDone: false,
            doneButton: '완료'
        },{
            id:1,
            title: '리액트 공부하기',
            body: '리액트 기초를 공부한다',
            isDone: true,
            doneButton: '완료'
        }]);
    // console.log(contents)
    return (
        <div className="layout">
            <Form />
            <Header setContents={setContents} contents={contents} />
            <List setContents={setContents}  contents={contents} />
         </div>
    )
}

export default Layout;
