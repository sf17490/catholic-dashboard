import DashboardFooter from "@/components/DashboardFooter";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home page footer", () => {
  beforeEach(() => {
    render(<DashboardFooter />);
  });

  it("has the correct class for the footer section", () => {
    const footer = screen.getByTestId("footing");
    expect(footer).toHaveClass("govuk-footer");
  });

  it("credits the UKHSA Dashboard", () => {
    const credit = screen.getByTestId("credit");

    expect(credit).toBeInTheDocument();
    expect(credit).toHaveTextContent("Inspired by the UKHSA Dashboard.");

    const UKHSAlink = screen.getByTestId("UKHSAlink");
    expect(UKHSAlink).toBeInTheDocument();
    expect(UKHSAlink).toHaveClass("govuk-footer__link");
  });

  it("gives the correct margin to the info in the footer", () => {
    const footer = screen.getByTestId("footingInfoContainer");
    expect(footer).toHaveClass("ml-10");
  });

  it("links to the OpenGovernmentLicence v3", () => {
    const licenceLink = screen.getByTestId("govLicenceLink");
    expect(licenceLink).toHaveAttribute(
      "href",
      "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
    );
  });

  it("links to the github repository", () => {
    const licenceLink = screen.getByTestId("dashboardGithubLink");
    expect(licenceLink).toHaveAttribute(
      "href",
      "https://github.com/sf17490/catholic-dashboard"
    );
  });
});
