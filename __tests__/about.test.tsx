import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import About from "@/pages/about";

describe("About page", () => {
    it("has text", ()=>{
        render(<About />)
        expect(screen.getByText("About the Catholic Data Dashboard")).toBeInTheDocument
    })

    it("includes a header", ()=>{
        render(<About />)
        expect(screen.getByRole("heading")).toBeInTheDocument
    })

});
