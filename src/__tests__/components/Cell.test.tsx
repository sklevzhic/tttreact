import {Cell} from "../../components/Cell";
import {BoardContext} from "../../context/board";
import {ICell} from "../../types/ICell";
import {Figures} from "../../consts/figures";
import {render, screen} from "@testing-library/react";

describe("Cell component", () => {
    let cellX: ICell = {x: 2, y: 2, id: "22", value: Figures.X}
    let cellO: ICell = {x: 3, y: 2, id: "32", value: Figures.O}
    let cellNull: ICell = {x: 2, y: 2, id: "22", value: null}

    test('Ячейка Х', () => {
        let tempContainer = render(<BoardContext.Provider value={{handlerCell: jest.fn()}}> <Cell cell={cellX}/>
        </BoardContext.Provider>)
        expect(tempContainer.getByText("X")).toBeInTheDocument()
        expect(tempContainer.queryByText("0")).not.toBeInTheDocument()
        expect(tempContainer.container.getElementsByClassName("text-blue-700").length).toBe(1)
        expect(tempContainer.container.getElementsByClassName("pointer-events-none").length).toBe(1)
        expect(tempContainer.container.getElementsByClassName("text-red-700").length).not.toBe(1)
    });

    test('Ячейка 0', () => {
        let tempContainer = render(<BoardContext.Provider value={{handlerCell: jest.fn()}}> <Cell cell={cellO}/>
        </BoardContext.Provider>)
        expect(tempContainer.getByText("0")).toBeInTheDocument()
        expect(tempContainer.queryByText("X")).not.toBeInTheDocument()
        expect(tempContainer.container.getElementsByClassName("pointer-events-none").length).toBe(1)
        expect(tempContainer.container.getElementsByClassName("text-blue-700").length).not.toBe(1)
        expect(tempContainer.container.getElementsByClassName("text-red-700").length).toBe(1)
    });

    test('Ячейка null', () => {
        let tempContainer = render(<BoardContext.Provider value={{handlerCell: jest.fn()}}> <Cell cell={cellNull}/>
        </BoardContext.Provider>)
        expect(tempContainer.queryByText("0")).not.toBeInTheDocument()
        expect(tempContainer.queryByText("X")).not.toBeInTheDocument()
        expect(tempContainer.container.getElementsByClassName("text-blue-700").length).toBe(0)
        expect(tempContainer.container.getElementsByClassName("pointer-events-none").length).toBe(0)
        expect(tempContainer.container.getElementsByClassName("text-red-700").length).toBe(0)
    });


})