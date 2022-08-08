import {SidebarBlock} from "../../components/SidebarBlock";
import {render} from "@testing-library/react";

describe("Sidebar component", () => {

    test('should be rendered the component Sidebar', () => {
        let tempContainer = render(<SidebarBlock title={"TitleNew"}>
            <h1 className={"someclass"}>some text</h1>
        </SidebarBlock>)
        expect(tempContainer.getByText("TitleNew")).toBeInTheDocument()
        expect(tempContainer.getByText("some text")).toBeInTheDocument()
        expect(tempContainer.container.getElementsByClassName("someclass").length).toBe(1)
    });

})