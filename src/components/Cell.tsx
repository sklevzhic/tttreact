import React, {FC, memo} from "react"
import "./Cell.css"
import {Figures} from "../consts/figures";
import {ICell} from "../types/ICell";
import {useBoardContext} from "../context/board";

interface CellProps {
    cell: ICell,
}

export const Cell: FC<CellProps> = memo(({cell}) => {
    let { setValueToCell } = useBoardContext()
    return <div
        onClick={() => setValueToCell(cell)}
        className={`cell
        ${cell.value === Figures.O ? "text-red-700" : ""} 
        ${cell.value === Figures.X ? "text-blue-700" : ""} 
        ${cell.value ? "pointer-events-none" : ""} `}
    >
        {cell.value}
    </div>
})