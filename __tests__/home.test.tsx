import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import Home from "@/pages";
jest.mock("next/router", () => require("__mocks__/next/router.ts"));

describe("Dashboard home page", () => {
  it("invokes St. Carlo Acutis", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Home />);

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith("Ora pro nobis, Carlo");
    });

    logSpy.mockRestore();
  });

  it("includes a the homePage header", async () => {
    render(<Home />)
    const homeHeader = await screen.findByTestId("homePageHeader")
    expect(homeHeader).toBeInTheDocument()
  })

  const expectedSkeletons = ["massAttendance", "conversions"];

  expectedSkeletons.forEach((skeletonId) => {
    it(`includes a "${skeletonId}" Skeleton`, async () => {
      render(<Home />);

      const skeleton = await screen.findByTestId(`${skeletonId}Skeleton`);

      expect(skeleton).toBeInTheDocument();
    });
  });

  it("gives the body the correct class", () => {
    render(<Home />);
    const body = screen.getByRole("body");
    expect(body).toHaveClass("marginalisedBody");
  });

  it("includes a correctly rendered map section", () => {
    render(<Home />);

    const mapDiv = screen.getByTestId("mapDiv");
    expect(mapDiv).toHaveClass("marginalisedBody");
  });

  it("renders all section headers correctly", () => {
    render(<Home />);

    const sectionHeaders = screen.getAllByRole("sectionHeader");

    sectionHeaders.forEach((header) => {
      expect(header).toHaveClass("govuk-heading-l govuk-!-margin-bottom-4");
    });
  });

  it("includes a footer", () => {
    render(<Home />);
    const footer = screen.getByTestId("footing");
    expect(footer).toBeInTheDocument();
  });
});
