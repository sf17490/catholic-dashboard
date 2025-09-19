import HomePageHeader from "@/components/HomePageHeader";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navigation Bar", () => {
  it("correctly titles the tab", () => {
    render(<HomePageHeader />);

    expect(document.title).toBe("UK Catholic Statistics Dashboard");
  });
  it("renders a heading", async () => {
    render(<HomePageHeader />);

    const heading = await screen.findByRole("mainTitle");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("UK Catholic Statistics Dashboard");
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
      "Showing Catholic statistics across England & Wales"
    );
  });
  it('has a link to the "What is the Statistics Dashboard?" page', () => {
    render(<HomePageHeader />);

    const aboutLink = screen.getByText(
      "What is the Catholic Statistics Dashboard?"
    );
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveClass("pt-2.5 text-[var(--colour-offwhite)]");
  });

  it("includes a 'Beta' notice", async () => {
    render(<HomePageHeader />);

    const betaNotice = screen.getByRole("betaNotice");
    expect(betaNotice).toBeInTheDocument();
    expect(betaNotice).toHaveStyle({ color: "#c1d7eb" });
  });

  it("includes a link to a feedback form", async () => {
    render(<HomePageHeader />);

    const feedbackLink = screen.getByTestId("feedbackLink");
    expect(feedbackLink).toBeInTheDocument();
    const feedbackWord = screen.getByText("feedback");
    expect(feedbackWord).toHaveClass("pt-2.5 text-[var(--colour-offwhite)]");
  });
});
