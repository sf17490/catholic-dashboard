import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import Home from "@/pages";
jest.mock('next/router', () => require('__mocks__/next/router.ts'));


describe("Dashboard home page", () => {
  it("invokes St. Carlo Acutis", async () => {

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Home />);

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith("Ora pro nobis, Carlo");
    })

    logSpy.mockRestore();
  });

  it("correctly titles the tab", () => {
    render(<Home />) 

    expect(document.title).toBe("UK Catholic Dashboard")
  })

  it("renders a heading", async () => {
    render(<Home />);

    const heading = await screen.findByRole("mainTitle");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("UK Catholic Data Dashboard");
  });

  it("has the correct class for the header section", () => {
    render(<Home />);

    const background = screen.getByTestId("headerDiv");

    expect(background).toHaveClass("bg-[var(--colour-blue)] p-2.5");
  });

  it("renders a subheading", async () => {
    render(<Home />);

    const subheading = screen.getByRole("subheading");

    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent(
      "Showing Catholic data across England & Wales"
    );
  });

  it('has a link to the "What is the Data Dashboard?" page', ()=>{
    render(<Home />)

    const aboutLink = screen.getByText("What is the Data Dashboard?")
    expect(aboutLink).toBeInTheDocument
    expect(aboutLink).toHaveClass("govuk-footer__link pt-2.5 text-[var(--colour-offwhite)]")
  })

  it("includes a 'Beta' notice", async () => {
    render(<Home />)

    const betaNotice = screen.getByRole("betaNotice")
    expect(betaNotice).toBeInTheDocument()
  })

  it('includes a "Mass Attendance" Skeleton', async () => {
    render(<Home />);

    const massAttendanceSkeleton = await screen.findByTestId(
      "massAttendanceSkeleton"
    );

    expect(massAttendanceSkeleton).toBeInTheDocument();
  });

  it('includes a "conversions" skeleton', async () => {
    render(<Home />)

    const conversionsSkeleton = await screen.findByTestId(
      "conversionsSkeleton"
    )

    expect(conversionsSkeleton).toBeInTheDocument();
  })

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

  it("includes a Mass Attendance skeleton graph", () => {
    render(<Home />)
    const skeleton = screen.getByTestId("massAttendanceSkeleton")
    expect(skeleton).toBeInTheDocument()
  })

  it("includes a footer", () => {
    render(<Home />)
    const footer = screen.getByTestId("footing")
    expect(footer).toBeInTheDocument()
  })
});
