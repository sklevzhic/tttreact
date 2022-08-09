import {BoardContext} from "../../context/board";
import {render, screen} from "@testing-library/react";
import {Settings} from "../../components/Settings";

describe("Settings component", () => {

    test('should render the component Settings', () => {
        let values = {
            size: 25,
            setSize: jest.fn(),
            winSeries: 3,
            setWinSeries: jest.fn(),
            handlerNewGame: jest.fn()
        }
        let tempComponent = render(<BoardContext.Provider value={values}>
            <Settings/>
        </BoardContext.Provider>)
        expect(screen.getByText("Размер сетки")).toBeInTheDocument()
        expect(screen.getByText("Победная серия")).toBeInTheDocument()
        expect(screen.getByText("Начать новую игру")).toBeInTheDocument()
        expect(tempComponent.getAllByRole("spinbutton")[0]).toHaveAttribute("min", "3")
        expect(tempComponent.getAllByRole("spinbutton")[0]).toHaveAttribute("value", "25")
        expect(tempComponent.getAllByRole("spinbutton")[1]).toHaveAttribute("max", "25")
    });

})