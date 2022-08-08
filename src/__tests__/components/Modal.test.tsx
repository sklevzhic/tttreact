import {BoardContext} from "../../context/board";
import {render} from "@testing-library/react";
import {Modal} from "../../components/Modal";

describe("Modal component", () => {

    test('should be rendered the modal component', () => {
        let values = {
            step: 12,
            handlerNewGame: jest.fn()
        }
        let {getByText} = render(<BoardContext.Provider value={values}>
            <Modal/>
        </BoardContext.Provider>)
        expect(getByText("Победа: 0")).toBeInTheDocument()
        expect(getByText("Начать новую игру")).toBeInTheDocument()
    });

})