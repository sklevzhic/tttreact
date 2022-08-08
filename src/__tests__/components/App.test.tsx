import {fireEvent, render, screen} from "@testing-library/react";
import App from "../../components/App";
import {BoardProvider} from "../../context/board";

describe("App component", () => {

    let Component = <BoardProvider>
        <App/>
    </BoardProvider>

    test('should be base the interface', () => {
        let tempContainer = render(Component)
        expect(tempContainer.getByText("Tic-Tac-Toe")).toBeInTheDocument()
        expect(tempContainer.getByText("Настройки")).toBeInTheDocument()
        expect(tempContainer.getByText("Победная серия")).toBeInTheDocument()
        expect(screen.getByText("Счетчик ходов: 0")).toBeInTheDocument()
    });

    test('should render cells', () => {
        let tempContainer = render(Component)
        expect(tempContainer.container.getElementsByClassName("cell").length).toBe(9)
        expect(tempContainer.container.getElementsByClassName("row").length).toBe(3)
    });

    test('should start a new game', () => {
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



})