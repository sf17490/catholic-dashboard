import NavBar from "@/components/NavBar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navigation Bar", () => {
  it("includes a header", () => {
    render(<NavBar />);
    expect(screen.getByTestId("headerSection")).toBeInTheDocument;
  });

  it("correctly titles the tab", () => {
    render(<NavBar />);

    expect(document.title).toBe("UK Catholic Dashboard");
  });

  it("includes a link to the homepage", () => {
    render(<NavBar />);

    expect(screen.getByTestId("homePageLink")).toBeInTheDocument();
  });

  it("correctly titles the header", () => {
    render(<NavBar />);
    expect(screen.getByTestId("homePageLink")).toHaveTextContent(
      "Catholic Data Dashboard"
    );
  });

  it("gives the title a margin of 10", () => {
    render(<NavBar />);
    expect(screen.getByTestId("homePageLinkContainer")).toHaveClass("ml-10");
  });
});
