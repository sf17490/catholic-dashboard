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

  it("includes a homePage header", async () => {
    render(<Home />);
    const homeHeader = await screen.findByTestId("homePageHeader");
    expect(homeHeader).toBeInTheDocument();
  });

  const expectedSkeletons = ["massAttendance", "conversions"];

  expectedSkeletons.forEach((skeletonId) => {
    it(`includes a "${skeletonId}" Skeleton`, async () => {
      render(<Home />);

      const skeleton = await screen.findByTestId(`${skeletonId}Skeleton`);

      expect(skeleton).toBeInTheDocument();
    });
  });

  it("gives the skeleton container the correct class", () => {
    render(<Home />);
    const skeletonContainer = screen.getByTestId("skeletonContainer");
    expect(skeletonContainer).toHaveClass(
      " mb-3 grid gap-4 sm:mb-6 md:grid-cols-[1fr_1fr]"
    );
  });

  it("gives the body the correct class", () => {
    render(<Home />);
    const body = screen.getByRole("body");
    expect(body).toHaveClass("marginalisedBody");
  });

  it("renders all section headers correctly", () => {
    render(<Home />);

    const sectionHeaders = screen.getAllByRole("sectionHeader");

    sectionHeaders.forEach((header) => {
      expect(header).toHaveClass("govuk-heading-l govuk-!-margin-bottom-4");
    });
  });

  it("includes a data by diocese section", () => {
    render(<Home />);

    expect(screen.getByTestId("dataByDioceseSection")).toBeInTheDocument();
    const sectionHeader = screen.getByTestId("dataByDioceseHeader");
    expect(sectionHeader).toBeInTheDocument();
    expect(sectionHeader).toHaveTextContent("Data by Diocese");
  });

  it("includes a footer", () => {
    render(<Home />);
    const footer = screen.getByTestId("footing");
    expect(footer).toBeInTheDocument();
  });
});
