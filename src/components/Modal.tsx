import React, {FC, useContext} from "react"
import "./Cell.css"
import {getCurrentFigure} from "../utils/getCurrentFigure";
import {BoardContext, BoardContextInterface} from "../context/board";

interface ModalProps {

}

export const Modal: FC<ModalProps> =() => {
    const { step, handlerNewGame } = useContext(BoardContext) as BoardContextInterface
    return <div
        className={"absolute top-1/2 left-1/2 p-4 w-full h-full bg-opacity-20 transform -translate-x-1/2 -translate-y-1/2 bg-red-900 flex"}>
        <div className={"w-96 flex flex-col mx-auto items-center p-4 my-auto bg-white shadow"}>
            <div className="text-center items-center text-4xl">Победа: {getCurrentFigure(step - 1)}</div>
            <button onClick={handlerNewGame} className={"button"}>Начать новую игру</button>
        </div>
    </div>
}