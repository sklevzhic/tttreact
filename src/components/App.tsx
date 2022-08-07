import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Information} from "./Information";
import {Board} from './Board';
import {SidebarBlock} from "./SidebarBlock";
import {BoardContext, BoardContextInterface} from "../context/board";

function App() {
    const {setDataFromLocalStorage} = useContext(BoardContext) as BoardContextInterface
     useEffect(() => {
        if (localStorage.getItem("board")) {
            let data = localStorage.getItem("board")
            if (data) {
                setDataFromLocalStorage(data)
            }
        }
    }, [])
    return (
        <div className="wrapper">
            <div className="sidebar">
                <h1 className="title">Tic-Tac-Toe</h1>
                <div className="flex flex-col mb justify-between rounded">
                    <SidebarBlock title={"Настройки"}>
                        <Settings/>
                    </SidebarBlock>
                    <SidebarBlock title={"Информация"}>
                        <Information/>
                    </SidebarBlock>

                </div>
            </div>
            <div className="board__wrapper">
                <Board/>
            </div>
        </div>
    );
}

export default App;
