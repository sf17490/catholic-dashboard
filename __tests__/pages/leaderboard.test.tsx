import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import Leaderboard from "@/pages/leaderboard";

describe("Leaderboard page", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Leaderboard />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("links to Hexham & Newcastle", () => {
    render(<Leaderboard />);
    const dioceseLink = screen.getByTestId("hexhamAndNewcastleLink");
    expect(dioceseLink).toHaveClass("govuk-link--no-visited-state");
  });
  it("links to Northampton", () => {
    render(<Leaderboard />);
    const dioceseLink = screen.getByTestId("northamptonLink");
    expect(dioceseLink).toHaveClass("govuk-link--no-visited-state");
    expect(dioceseLink).toHaveClass("govuk-link--no-visited-state");
  });
});
