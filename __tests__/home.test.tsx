import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import Home from "@/pages";

describe("Dashboard home page", () => {
  it("invokes St. Carlo Acutis", async () => {

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Home />);

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith("Ora pro nobis, Carlo");
    })

    logSpy.mockRestore();
  });

  it("renders a heading", async () => {
    render(<Home />);

    const heading = await screen.findByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("UK Catholic Data Dashboard");
  });

  it("has the correct class for the header section", () => {
    render(<Home />);

    const background = screen.getByTestId("headerDiv");

    expect(background).toHaveClass("fullWidthHeader");
  });

  it("renders a subheading", async () => {
    render(<Home />);

    const subheading = screen.getByRole("subheading");

    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent(
      "Showing Catholic data across England & Wales"
    );
  });

  it("includes a 'Beta' notice", async () => {
    render(<Home />)

    const betaNotice = screen.getByRole("betaNotice")
    expect(betaNotice).toBeInTheDocument()
  })

  it('includes a "Mass Attendance" component', async () => {
    render(<Home />);

    const massAttendanceSection = await screen.findByTestId(
      "massAttendanceSection"
    );

    expect(massAttendanceSection).toBeInTheDocument();
  });

  it("gives the body the correct class", () => {
    render(<Home />);
    const body = screen.getByRole("body");
    expect(body).toHaveClass("marginalisedBody");
  });

  it("includes a correctly rendered map section", ()=>{
    render(<Home />)
    
    const mapDiv = screen.getByTestId("mapDiv")
    expect(mapDiv).toHaveClass("marginalisedBody")
  })

  it("renders all section headers correctly", ()=> {
    render(<Home />)

    const sectionHeaders = screen.getAllByRole("sectionHeader")

    sectionHeaders.forEach(header => {
      expect(header).toHaveClass("govuk-heading-l govuk-!-margin-bottom-4")
    })
  
  })

  it("includes a footer", () => {
    render(<Home />)
    const footer = screen.getByTestId("footing")
    expect(footer).toBeInTheDocument()
  })
});
