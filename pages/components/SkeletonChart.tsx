import Link from "next/link";
import styles from "../../styles/Skeleton.module.scss";

export type SkeletonProps = {
  rootTestId: string;
  heading: string;
  subheader: string;
};

export default function SkeletonChart({rootTestId, heading, subheader}: SkeletonProps) {
  return (
    <div data-testid={`${rootTestId}Skeleton`} className="w-full">
      <Link
        data-testid={`${rootTestId}Link`}
        href="/massAttendance"
        className="govuk-!-padding-4 ukhsa-chart-card relative flex flex-col bg-[var(--colour-chart-background)] no-underline transition-colors duration-200 ukhsa-focus hover:bg-[var(--colour-chart-background-hover)] focus:bg-[var(--colour-chart-background-hover)]"
      >
        <div data-testid={"context"}>
          <h2
            role={"skeletonHeader"}
            className={"govuk-heading-l govuk-!-margin-bottom-4"}
          >
            {heading}
          </h2>
          <p role={"skeletonSubheader"}>{subheader}</p>
        </div>
        <img
          data-testid={"skeletonGraph"}
          src="/images/minimalist_National_Mass_Attendance.png"
          className={styles.chartContainer}
        />
      </Link>
    </div>
  );
}
