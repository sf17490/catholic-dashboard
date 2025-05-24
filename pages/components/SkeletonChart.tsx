import Link from "next/link";
import styles from "../../styles/Skeleton.module.scss";

export default function SkeletonChart() {
  return (
    <div data-testid={"skeleton"} className="w-full max-w-5/10">
      <Link
        data-testid="massAttendanceLink"
        href="/MassAttendance"
        className="govuk-!-padding-4 ukhsa-chart-card relative flex flex-col bg-[var(--colour-chart-background)] no-underline transition-colors duration-200 ukhsa-focus hover:bg-[var(--colour-chart-background-hover)] focus:bg-[var(--colour-chart-background-hover)]"
      >
        <div data-testid={"context"}>
          <h2
            role={"skeletonHeader"}
            className={"govuk-heading-l govuk-!-margin-bottom-4"}
          >
            Mass Attendance
          </h2>
          <p role={"skeletonSubheader"}>Sunday Mass attendance by year</p>
        </div>
        <img
          data-testid={"skeletonGraph"}
          src="/images/SkeletonPlaceholder.png"
          className={styles.chartContainer}
        />
      </Link>
    </div>
  );
}
