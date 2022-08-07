import {BoardContext} from "../../context/board";
import {Board} from "../../components/Board";
import {render, screen} from "@testing-library/react";
import React from "react";
import {boardMock} from "../utils/checkWin.test";

describe("Board component", () => {
    const contextValues = {cells: boardMock, isGame: true, step: 25};
    const contextFinish= {cells: boardMock, isGame: false, step: 25};

    test('рендер ячеек 8х8 с заполненными данными', () => {
        let TempComponent = render(<BoardContext.Provider value={contextValues}>
            <Board/>
        </BoardContext.Provider>)
        expect(TempComponent.container.getElementsByClassName("cell").length).toBe(64)
        expect(TempComponent.container.getElementsByClassName("row").length).toBe(8)
        expect(TempComponent.getAllByText("X").length).toBe(9)
        expect(TempComponent.getAllByText("0").length).toBe(8)
    });


    test('рендер ячеек 8х8 с заполненными данными', () => {
        let TempComponent = render(<BoardContext.Provider value={contextFinish}>
            <Board/>
        </BoardContext.Provider>)

        expect(TempComponent.getByText("Победа")).toBeInTheDocument()
    });


})