import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <div className="flex mx-auto overflow-hidden p-2">
                <div className="overflow-hidden border-r shrink-0 basis-3/12">
                    <div><h1 className="flex-auto text-lg font-semibold text-slate-900 mb-2">Tic-Tac-Toe</h1></div>
                    <div className="flex flex-col mb justify-between rounded">
                        <div className="flex-1 p-2 border m-2 text-center"><h6
                            className="text-lg font-semibold leading-7 text-slate-900 pb-1 border-b">Настройки</h6>
                            <div className="settings p-2">
                                <div className="flex justify-center items-center mb-1"><p
                                    className="text-sm font-semibold leading-7 text-slate-900">Размер сетки</p><input
                                    type="number" id="size"
                                    className="max-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 ml-2"
                                    placeholder="" value="3" min="3" max="55" /></div>
                                <div className="flex justify-center items-center"><p
                                    className="text-sm font-semibold leading-7 text-slate-900">Победная серия</p><input
                                    type="number" id="winSeries"
                                    className="max-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 ml-2"
                                    placeholder="" value="3" min="3" max="55" /></div>
                                <button id="start"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">Начать
                                    новую игру
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 p-2 border m-2 text-center"><h6
                            className="text-lg font-semibold leading-7 text-slate-900 pb-1 border-b">Информация</h6>
                            <div className="settings p-2">
                                <div className="flex justify-center items-center mb-1"><p
                                    className="text-sm font-semibold leading-7 text-slate-900">Счетчик: <span
                                    id="step">0</span> ход</p></div>
                                <div className="flex justify-center items-center"><p
                                    className="text-sm font-semibold leading-7 text-slate-900">Ход: <span
                                    className="text-xl" id="figureCurrent">X</span></p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-scroll overflow-hidden max-h-[97vh] basis-9/12" id="board">
                    <div className="wrapper flex flex-col">
                        <div className="flex">
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                        </div>
                        <div className="flex">
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                        </div>
                        <div className="flex">
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                            <div
                                className="border w-8 h-8 text-xl shrink-0 text-center cursor-default pt-0.5 text-gray-700 cursor-pointer hover:bg-gray-200 hover:text-opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
