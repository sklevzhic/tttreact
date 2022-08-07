import {fireEvent, getByText, render, screen} from "@testing-library/react";
import App from "../../components/App";
import {BoardProvider} from "../../context/board";

describe("App component", () => {

    let Component = <BoardProvider> <App/> </BoardProvider>
    test('читстый интерфейс', () => {
        let tempContainer = render(Component)
        expect(tempContainer.getByText("Tic-Tac-Toe")).toBeInTheDocument()
        expect(tempContainer.getByText("Настройки")).toBeInTheDocument()
        expect(tempContainer.getByText("Победная серия")).toBeInTheDocument()
        expect(screen.getByText("Счетчик ходов: 0")).toBeInTheDocument()
    });
    test('рендер ячеек по умолчанию 3х3', () => {
        let tempContainer = render(Component)
        expect(tempContainer.container.getElementsByClassName("cell").length).toBe(9)
        expect(tempContainer.container.getElementsByClassName("row").length).toBe(3)
    });

    test('start new game', () => {
        let {container} = render(Component)
        let sizeInput = screen.getByPlaceholderText("Размер сетки")
        let winSeriesInput = screen.getByPlaceholderText("Победная серия")


        fireEvent.change(sizeInput, {
            target: {value: "12"},
        });
        expect(sizeInput).toHaveAttribute("value", "12")
        fireEvent.change(winSeriesInput, {
            target: {value: "9"},
        });
        expect(winSeriesInput).toHaveAttribute("value", "9")
        fireEvent.click(screen.getByText(/Начать новую игру/i))

        expect(screen.getByText("Победная серия: 9")).toBeInTheDocument()
        expect(screen.getByText("Счетчик ходов: 0")).toBeInTheDocument()
        expect(container.getElementsByClassName("cell").length).toBe(144)
        expect(container.getElementsByClassName("row").length).toBe(12)
    });


    test('Клик по cell', () => {
        let { container } = render(Component)
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

        fireEvent.click(container.querySelectorAll(".cell")[0])
        fireEvent.click(container.querySelectorAll(".cell")[1])
        fireEvent.click(container.querySelectorAll(".cell")[4])
        fireEvent.click(container.querySelectorAll(".cell")[5])
        fireEvent.click(container.querySelectorAll(".cell")[8])

        screen.debug()
    });


})