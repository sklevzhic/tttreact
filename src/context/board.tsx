import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {initialBoard} from "../utils/initialBoard";
import {ICell} from "../types/ICell";
import {getCurrentFigure} from "../utils/getCurrentFigure";
import {Figures} from "../consts/figures";
import {checkWin} from "../utils/checkWin";
import {IBoard} from "../types/IBoard";

interface AuxProps {
    children: ReactNode
}

export interface BoardContextInterface {
    size: number,
    setSize: (newValue: number) => void
    winSeries: number,
    setWinSeries: (newValue: number) => void
    winSeriesNewGame: number,
    setWinSeriesNewGame: (newValue: number) => void
    setDataFromLocalStorage: (data: string) => void
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
    const [size, setSize] = useState<number>(3)
    const [winSeries, setWinSeries] = useState<number>(3)
    const [winSeriesNewGame, setWinSeriesNewGame] = useState<number>(3)
    const [cells, setCells] = useState<ICell[][]>(initialBoard(size))
    const [step, setStep] = useState<number>(0)

    useEffect(() => {
        setToLocalStorage()
    }, [step, winSeries, cells])

    const handlerNewGame = () => {
        setIsGame(true)
        setCells(initialBoard(size))
        setStep(0)
        setWinSeries(winSeriesNewGame)
    }

    const setValueToCell = (cell: ICell, figure: Figures = getCurrentFigure(step)) => {
        let newArr = cells
        newArr[cell.y][cell.x].value = figure
        setCells(newArr)
        setStep(step + 1)
        if (checkWin(cells, cell, winSeries, figure)) {
            setIsGame(false)
        }
    }

    const setToLocalStorage = () => {
        let tempCells = isGame ? cells : initialBoard(size)
        let board: IBoard = {size, winSeries, winSeriesNewGame, cells: tempCells, step}
        localStorage.setItem("board", JSON.stringify(board))
    }

    const setDataFromLocalStorage = (data: string) => {
        let obj: IBoard = JSON.parse(data)
        setWinSeries(obj.winSeries)
        setWinSeriesNewGame(obj.winSeriesNewGame)
        setStep(obj.step)
        setCells(obj.cells)
        setSize(obj.size)
    }

    return (
        <BoardContext.Provider
            value={{
                size, setSize, cells, setCells, winSeries, setWinSeries,
                step, setStep, setValueToCell, handlerNewGame,
                isGame, winSeriesNewGame, setWinSeriesNewGame,
                setDataFromLocalStorage
            }}
        >
            {children}
        </BoardContext.Provider>
    );
}

export const useBoardContext = () => useContext(BoardContext) as BoardContextInterface
