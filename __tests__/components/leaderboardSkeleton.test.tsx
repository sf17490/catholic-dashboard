import LeaderboardSkeleton from "@/components/LeaderboardSkeleton";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Leaderboard skeleton", () => {
  it("links to the leaderboard page", async () => {
    render(<LeaderboardSkeleton />);

    const leaderboardLink = await screen.findByTestId("leaderboardLink");

    expect(leaderboardLink).toBeInTheDocument();
    expect(leaderboardLink).toHaveClass(
      "govuk-!-padding-4 relative flex flex-col bg-[var(--colour-chart-background)] hover:bg-[var(--colour-chart-background-hover)] transition-colors duration-200 focus:bg-[var(--colour-chart-background-hover)] "
    );
  });

  it("has a 'Leaderboard' heading", () => {
    render(<LeaderboardSkeleton />);

    const heading = screen.getByTestId("leaderboardSkeletonHeading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Conversions Leaderboard");
    expect(heading).toHaveClass("govuk-heading-l govuk-!-margin-bottom-4");
  });

  it("lists the top three dioceses", () => {
    render(<LeaderboardSkeleton />);

    const topDiocesesList = screen.getByTestId("leaderboardTopThreeList");
    expect(topDiocesesList).toHaveClass("govuk-list govuk-list--number");
    expect(topDiocesesList).toHaveTextContent(
      "Hexham & NewcastleBirminghamMiddlesbrough"
    );
  });
});
