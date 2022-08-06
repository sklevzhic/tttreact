import React, {FC, memo} from "react"
import "./Cell.css"
import {Figures} from "../consts/figures";
import {ICell} from "../types/ICell";

interface CellProps {
    cell: ICell,
    handlerCell: (cell: ICell) => void
}

export const Cell: FC<CellProps> = memo(({cell, handlerCell}) => {
    return <div
        onClick={() => handlerCell(cell)}
        className={`cell
        ${cell.value === Figures.O && "text-red-700"} 
        ${cell.value === Figures.X && "text-blue-700"} 
        ${cell.value && "pointer-events-none"} `}
    >
        {cell.value}
    </div>
})