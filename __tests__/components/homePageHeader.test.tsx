import HomePageHeader from "@/pages/components/HomePageHeader";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navigation Bar", () => {
  it("correctly titles the tab", () => {
    render(<HomePageHeader />);

    expect(document.title).toBe("UK Catholic Dashboard");
  });
  it("renders a heading", async () => {
    render(<HomePageHeader />);

    const heading = await screen.findByRole("mainTitle");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("UK Catholic Data Dashboard");
  });
  it("has the correct class for the header section", () => {
    render(<HomePageHeader />);

    const background = screen.getByTestId("headerDiv");

    expect(background).toHaveClass("bg-[var(--colour-blue)] p-2.5");
  });
  it("renders a subheading", async () => {
    render(<HomePageHeader />);

    const subheading = screen.getByRole("subheading");

    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent(
      "Showing Catholic data across England & Wales"
    );
  });
  it('has a link to the "What is the Data Dashboard?" page', () => {
    render(<HomePageHeader />);

    const aboutLink = screen.getByText("What is the Catholic Data Dashboard?");
    expect(aboutLink).toBeInTheDocument;
    expect(aboutLink).toHaveClass("pt-2.5 text-[var(--colour-offwhite)]");
  });

  it("includes a 'Beta' notice", async () => {
    render(<HomePageHeader />);

    const betaNotice = screen.getByRole("betaNotice");
    expect(betaNotice).toBeInTheDocument();
  });
});
