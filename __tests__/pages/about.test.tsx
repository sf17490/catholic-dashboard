import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import About from "@/pages/about";

describe("About page", () => {

    it("includes a header", ()=>{
        render(<About />)
        expect(screen.getByTestId("headerSection")).toBeInTheDocument()
    })

    it("includes a footer", ()=>{
        render(<About />)
        expect(screen.getByTestId("footing")).toBeInTheDocument()
    })

    it("has the correct title", ()=>{
        render(<About />)
        expect(screen.getByTestId("aboutPageTitle")).toHaveTextContent("About")
    })

    //TODO: Combine this with specific assertions on the expected questions. 
    it("has the expected text and formatting", ()=>{
        const {asFragment} = render(<About />)
        expect(asFragment()).toMatchSnapshot();
    })

});
