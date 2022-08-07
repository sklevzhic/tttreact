import {ICell} from "./ICell";

export interface IBoard {
    size: number
    winSeries: number
    winSeriesNewGame: number
    cells: ICell[][]
    step: number
}