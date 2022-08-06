import React, { FC } from "react"
import {Cell} from "./Cell";
import {ICell} from "../types/ICell";
import {useBoardContext} from "../context/board";
import {getCurrentFigure} from "../utils/getCurrentFigure";

interface BoardProps {

}

export const Board: FC<BoardProps> = React.memo(() => {
    let {cells, isGame, step, setValueToCell} = useBoardContext()
    const handlerCell = (cell: ICell) => {
        setValueToCell(cell)
    }
    return <div className={`wrapper flex flex-col ${!isGame && "opacity-50 pointer-events-none"}`}>
        {
            !isGame && <div
                className={"absolute top-1/2 left-1/2 p-4 w-full h-full bg-opacity-20 transform -translate-x-1/2 -translate-y-1/2 bg-red-200"}>
                <div className="text-center items-center">Победа <span>{getCurrentFigure(step - 1)}</span></div>
            </div>
        }
        {
            cells.map((row, i) => {
                return <div key={i} className="flex">
                    {
                        row.map((cell) => {
                            return <Cell cell={cell} key={cell.id} handlerCell={handlerCell}/>
                        })
                    }
                </div>
            })
        }
    </div>
})