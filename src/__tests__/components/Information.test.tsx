import {render} from "@testing-library/react";
import {BoardContext} from "../../context/board";
import {Information} from "../../components/Information";

describe("Information component", () => {


    test('render component', () => {
        let tempComponent = render(<BoardContext.Provider value={{step: 5, winSeries: 3}}>
            <Information/>
        </BoardContext.Provider>)
        expect(tempComponent.getByText("Счетчик ходов: 5")).toBeInTheDocument()
        expect(tempComponent.getByText("Победная серия: 3")).toBeInTheDocument()
    });

})