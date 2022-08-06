import {ICell} from "./ICell";

export interface IBoard {
    size: number
    winSeries: number
    cells: ICell[][]
}