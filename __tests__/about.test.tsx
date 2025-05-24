import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import About from "@/pages/about";

describe("About page", () => {

    it("includes a header", ()=>{
        render(<About />)
        expect(screen.getByRole("heading")).toBeInTheDocument
    })

    it("includes a footer", ()=>{
        render(<About />)
        expect(screen.getByTestId("footing")).toBeInTheDocument
    })

});
