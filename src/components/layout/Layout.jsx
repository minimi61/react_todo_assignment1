import React,{useState} from "react";
import './style.css';
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";

const Layout = () => {
    const [content, setContent] = useState([{
            id:0,
            title: '리액트 공부하기',
            content: '리액트 기초를 공부한다',
            isDone: false,
        }]);
    // console.log(content[0].isDone)
    return (
        <div className="layout">
            <Form />
            <Header setContent={setContent} content={content} />
            <List setContent={setContent}  content={content} />
         </div>
    )
}

export default Layout;
