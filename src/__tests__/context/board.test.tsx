import {fireEvent, render, screen} from "@testing-library/react";
import {BoardProvider} from "../../context/board";
import React from "react";
import App from "../../components/App";


describe("Provider", () => {

    test('should show value in cell after click', () => {
        let {container, getByText, queryByText} = render(<BoardProvider><App/></BoardProvider>)
        let sizeInput = screen.getByPlaceholderText("Размер сетки")
        let winSeriesInput = screen.getByPlaceholderText("Победная серия")
        fireEvent.change(sizeInput, {
            target: {value: "3"},
        });
        expect(sizeInput).toHaveAttribute("value", "3")
        fireEvent.change(winSeriesInput, {
            target: {value: "3"},
        });
        expect(winSeriesInput).toHaveAttribute("value", "3")
        fireEvent.click(screen.getByText(/Начать новую игру/i))
        fireEvent.click(container.querySelectorAll(".cell")[0]) // x     // X 0 *
        fireEvent.click(container.querySelectorAll(".cell")[1]) // 0     // * X 0
        fireEvent.click(container.querySelectorAll(".cell")[1]) // 0     // * * X
        fireEvent.click(container.querySelectorAll(".cell")[4]) // X
        expect(getByText("Счетчик ходов: 3")).toBeInTheDocument()
        expect(queryByText("Победа")).not.toBeInTheDocument()
    });

    test('should start new game after win', () => {
        let {container, getByText} = render(<BoardProvider><App/></BoardProvider>)

        let sizeInput = screen.getByPlaceholderText("Размер сетки")
        let winSeriesInput = screen.getByPlaceholderText("Победная серия")

        fireEvent.change(sizeInput, {
            target: {value: "3"},
        });
        expect(sizeInput).toHaveAttribute("value", "3")
        fireEvent.change(winSeriesInput, {
            target: {value: "3"},
        });
        expect(winSeriesInput).toHaveAttribute("value", "3")
        fireEvent.click(screen.getByText(/Начать новую игру/i))

        fireEvent.click(container.querySelectorAll(".cell")[0]) // x     // X 0 *
        fireEvent.click(container.querySelectorAll(".cell")[1]) // 0     // * X 0
        fireEvent.click(container.querySelectorAll(".cell")[4]) // X     // * * X
        fireEvent.click(container.querySelectorAll(".cell")[4]) // (ничего не меняется)
        fireEvent.click(container.querySelectorAll(".cell")[5]) // 0
        fireEvent.click(container.querySelectorAll(".cell")[8]) // X
        expect(getByText("Счетчик ходов: 5")).toBeInTheDocument()
        expect(getByText("Победная серия: 3")).toBeInTheDocument()
        expect(getByText("Победа: X")).toBeInTheDocument()
    });

    test('should show the modal window with win', () => {
        let {container, getByText} = render(<BoardProvider><App/></BoardProvider>)
        let sizeInput = screen.getByPlaceholderText("Размер сетки")
        let winSeriesInput = screen.getByPlaceholderText("Победная серия")

        fireEvent.change(sizeInput, {
            target: {value: "3"},
        });
        expect(sizeInput).toHaveAttribute("value", "3")
        fireEvent.change(winSeriesInput, {
            target: {value: "3"},
        });
        expect(winSeriesInput).toHaveAttribute("value", "3")
        fireEvent.click(screen.getByText(/Начать новую игру/i))

        fireEvent.click(container.querySelectorAll(".cell")[0]) // x     // X 0 *
        fireEvent.click(container.querySelectorAll(".cell")[1]) // 0     // * X 0
        fireEvent.click(container.querySelectorAll(".cell")[4]) // X     // * * X
        fireEvent.click(container.querySelectorAll(".cell")[5]) // 0
        fireEvent.click(container.querySelectorAll(".cell")[8]) // X
        expect(getByText("Счетчик ходов: 5")).toBeInTheDocument()
        expect(getByText("Победная серия: 3")).toBeInTheDocument()
        expect(getByText("Победа: X")).toBeInTheDocument()
    });


})
