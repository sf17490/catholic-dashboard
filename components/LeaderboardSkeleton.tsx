import Link from "next/link";

export type SkeletonProps = {
  rootTestId: string;
  heading: string;
  subheader: string;
  href: string;
};

export default function LeaderboardSkeleton() {
  return (
    <div>
      <Link
        data-testid="leaderboardLink"
        href="/leaderboard"
        className="govuk-!-padding-4 relative flex flex-col bg-[var(--colour-chart-background)] hover:bg-[var(--colour-chart-background-hover)] transition-colors duration-200 focus:bg-[var(--colour-chart-background-hover)] "
      >
        <h2
          data-testid="leaderboardSkeletonHeading"
          className="govuk-heading-l govuk-!-margin-bottom-4"
        >
          Conversions Leaderboard
        </h2>
        <ol
          data-testid="leaderboardTopThreeList"
          className="govuk-list govuk-list--number"
        >
          <li>Hexham & Newcastle</li>
          <li>Birmingham</li>
          <li>Middlesbrough</li>
        </ol>
      </Link>
    </div>
  );
}
