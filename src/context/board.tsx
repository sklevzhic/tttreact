import {createContext, ReactNode, useContext, useState} from "react";
import {initialBoard} from "../utils/initialBoard";
import {ICell} from "../types/ICell";
import {getCurrentFigure} from "../utils/getCurrentFigure";
import {Figures} from "../consts/figures";
import {checkWin} from "../utils/checkWin";

interface AuxProps {
    children: ReactNode
}

export interface BoardContextInterface {
    size: number,
    winSeries: number,
    setSize: (newValue: number) => void
    setWinSeries: (newValue: number) => void
    step: number,
    setStep: (newValue: number) => void
    isGame: number,
    cells: ICell[][],
    setCells: (newValue: ICell[][]) => void,
    setValueToCell: (cell: ICell) => void
    handlerNewGame: () => void
}


export const BoardContext = createContext<BoardContextInterface | {}>({} as BoardContextInterface);

export const BoardProvider = ({children}: AuxProps) => {
    const [isGame, setIsGame] = useState<boolean>(true)
    const [size, setSize] = useState<number>(55)
    const [winSeries, setWinSeries] = useState<number>(3)
    const [cells, setCells] = useState<ICell[][]>(initialBoard(size))
    const [step, setStep] = useState<number>(0)

    const handlerNewGame = () => {
        setIsGame(true)
        setCells(initialBoard(size))
        setStep(0)
        localStorage.removeItem("board")
    }

    const setValueToCell = (cell:ICell, figure: Figures = getCurrentFigure(step)) => {
        let newArr = cells
        newArr[cell.y][cell.x].value = figure
        setCells(newArr)
        setStep(step + 1)
        if ( checkWin(cells, cell, winSeries, figure) ) {
            setIsGame(false)
        }
        setToLocalStorage()
    }

    const setToLocalStorage = () => {
        let board = {size, winSeries, cells, step}
        localStorage.setItem("board", JSON.stringify(board))
    }

    return (
        <BoardContext.Provider
            value={{
                size, setSize, cells, setCells, winSeries, setWinSeries,
                step, setStep, setValueToCell, handlerNewGame,
                isGame
            }}
        >
            {children}
        </BoardContext.Provider>
    );
}

export const useBoardContext = () => useContext(BoardContext) as BoardContextInterface
