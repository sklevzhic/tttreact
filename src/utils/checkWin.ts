import {ICell} from "../types/ICell";
import {Figures} from "../consts/figures";
import {ILine, ILines} from "../types/ILine";

// Фуекция проверки победы
// После клика на ячейку, функция проходит по 4 линиям
// в диапазоне -winSeries = cell(x,y) = +winSeries и записывает значения в arr
// Возвращает функция true/false на вопрос
// Содержит ли хотя бы один маассив линий победную комбинацию

export function checkWin(cells: ICell[][], cell: ICell, winSeries: number, figure: Figures): boolean {
    let lines: ILines = {
        "vertical": {x: "n", y: "i", arr: []},
        "horizontal": {x: "i", y: "n", arr: []},
        "mainDiagonal": {x: "i", y: "i", arr: []},
        "secondaryDiagonal": {x: "i", y: "d", arr: []},
    }
    // по координатам х,у получает значения с линий и записывает значения в arr
    Object.keys(lines).map(key => {
        lines[key].arr = checkValuesInLine(cells, winSeries, cell, lines[key])
    })
    // Содержит ли хотя бы одна линия победную комбинацию
    return Object.keys(lines).some(key => checkWinSeriesInLine(lines[key].arr , winSeries, figure))
}
export function checkValuesInLine(cells: ICell[][], winSeries: number, cell: ICell, line: ILine) {
    let res = []
    for (let i = -winSeries + 1; i < winSeries; i++) {
        let x = (line.x === "n") ? cell.x : (line.x === "d") ? cell.x - i : cell.x + i
        let y = (line.y === "n") ? cell.y : (line.y === "d") ? cell.y - i : cell.y + i
        if (x >= 0 && y >= 0 && x < cells.length && y < cells.length) {
            res.push(cells[y][x].value)
        }
    }
    return res
}
export function checkWinSeriesInLine(array: (Figures | null)[], winSeries: number, value: Figures): boolean {
    let count = 0
    for (let i = 0; i <= array.length - 1; i++ ) {
        let tempCount = array[i] === value ? count + 1 : 0
        count = tempCount
        if (tempCount === winSeries) return true
    }
    return false
}
