import styles from "../../styles/Skeleton.module.scss";

export default function SkeletonChart() {
  return (
    <div data-testid={"skeleton"} >
      <div data-testid={"context"}>
        <h2
          role={"skeletonHeader"}
          className={"govuk-heading-l govuk-!-margin-bottom-4"}
        >
          Skeleton
        </h2>
        <p role={"skeletonSubheader"}>Sunday Mass attendance by year</p>
        <div >
            <a className="govuk-!-padding-4 ukhsa-chart-card relative flex flex-col bg-[var(--colour-chart-background)] no-underline transition-colors duration-200 ukhsa-focus hover:bg-[var(--colour-chart-background-hover)] focus:bg-[var(--colour-chart-background-hover)]">
                <p>Test section</p>
                </a>
        </div>
      </div>
      <img
        data-testid={"skeletonGraph"}
        src="/images/SkeletonPlaceholder.png"
        className={styles.chartContainer}
      />
    </div>
  );
}
//<a class="govuk-!-padding-4 ukhsa-chart-card relative flex flex-col bg-[var(--colour-chart-background)] no-underline transition-colors duration-200 ukhsa-focus hover:bg-[var(--colour-chart-background-hover)] focus:bg-[var(--colour-chart-background-hover)]" aria-labelledby="chart-row-card-heading-mpox_clade_ib" href="/outbreaks/mpox-clade-1b"></a>