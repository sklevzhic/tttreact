import {InputNumber} from "../../components/Input";
import {render} from "@testing-library/react";

describe("Input component", () => {

    test('should render the component Input', () => {
        let tempContainer = render(<InputNumber text={"Title"} min={3} max={55} defaultValue={10}
                                                handlerNewValue={jest.fn}/>)
        expect(tempContainer.getByText("Title")).toBeInTheDocument()
        expect(tempContainer.getByDisplayValue("10")).toBeInTheDocument()
        expect(tempContainer.getByDisplayValue("10")).toBeInTheDocument()
        expect(tempContainer.getByRole("spinbutton")).toHaveAttribute("min", "3")
        expect(tempContainer.getByRole("spinbutton")).toHaveAttribute("max", "55")
        expect(tempContainer.getByRole("spinbutton")).toHaveAttribute("value", "10")
    });

})