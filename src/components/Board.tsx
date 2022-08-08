import React, {FC, useContext} from "react"
import {Cell} from "./Cell";
import {BoardContext, BoardContextInterface} from "../context/board";
import {getCurrentFigure} from "../utils/getCurrentFigure";
import {Modal} from "./Modal";

interface BoardProps {

}

export const Board: FC<BoardProps> = React.memo(() => {
    let {cells, isGame} = useContext(BoardContext) as BoardContextInterface
    return <div className={`wrapper flex flex-col ${!isGame && ""}`}>
        { !isGame && <Modal/> }
        {
            cells.map((row, i) => {
                return <div key={i} className="flex row">
                    {
                        row.map((cell) => {
                            return <Cell cell={cell} key={cell.id}/>
                        })
                    }
                </div>
            })
        }
    </div>
})