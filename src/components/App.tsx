import React from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Information} from "./Information";
import {Board} from './Board';
import {SidebarBlock} from "./SidebarBlock";

function App() {
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">
                    <h1 className="title">Tic-Tac-Toe</h1>
                    <div className="flex flex-col mb justify-between rounded">
                        <SidebarBlock title={"Настройки"}>
                            <Settings />
                        </SidebarBlock>
                        <SidebarBlock title={"Информация"}>
                            <Information />
                        </SidebarBlock>

                    </div>
                </div>
                <div className="board__wrapper">
                    <Board/>
                </div>
            </div>
        </div>
    );
}

export default App;
