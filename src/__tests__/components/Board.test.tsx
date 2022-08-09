import {BoardContext} from "../../context/board";
import {Board} from "../../components/Board";
import {render} from "@testing-library/react";
import React from "react";
import {boardMock} from "../utils/checkWin.test";

describe("Board component", () => {
    const contextValues = {cells: boardMock, isGame: true, step: 25};

    test('should render cells 8x8 with filled values 9-Х и 8-0', () => {
        let {getAllByText, container} = render(<BoardContext.Provider value={contextValues}>
            <Board/>
        </BoardContext.Provider>)
        expect(container.getElementsByClassName("cell").length).toBe(64)
        expect(container.getElementsByClassName("row").length).toBe(8)
        expect(getAllByText("X").length).toBe(9)
        expect(getAllByText("0").length).toBe(8)
    });
})