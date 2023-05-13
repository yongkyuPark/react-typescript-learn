import React from "react";
import {Route, Routes, Link} from "react-router-dom"
import MyButton from "./Mybutton";
import HedyImage from './Hedyimage';
import ShoppingList from './ShoppingList';
import CountButton from './CountButton';
import TogetherButton from './TogetherButton';

const QuickStartMain = () => {
    return (
        <div>
            <h1>QuickStart 화면 입니다.</h1>
            <MyButton/>
            <HedyImage/>
            <ShoppingList/>
            <CountButton/>
            <TogetherButton/>
        </div>
    )
}

export default QuickStartMain;

