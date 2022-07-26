import React,{useState} from "react";
import './style.css';
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";

const Layout = () => {
    const [content, setContent] = useState({
        id:'',
        title: '리액트 공부하기',
        content: '리액트 기초를 공부한다'        
    });

    return (
        <div className="layout">
            <Form />
            <Header setContent={setContent} />
            <List content={content} />
         </div>
    )
}

export default Layout;