import {ICell} from "../types/ICell";

export function initialBoard(size: number): ICell[][] {
    let cells: ICell[][] = []
    for (let y = 0; y < size; y++) {
        let row: ICell[] | null = []
        for (let x = 0; x < size; x++) {
            row.push({x,y, value: null})
        }
        cells.push(row)
    }
    return cells
}