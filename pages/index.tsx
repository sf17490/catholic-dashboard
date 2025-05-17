import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import DashboardFooter from "./components/DashboardFooter";
import SkeletonChart from "./components/SkeletonChart";

const DynamicHoverMap = dynamic(() => import("@/pages/components/MiniMap"), {
  ssr: false,
});

const DynamicDiocesesMap = dynamic(
  () => import("@/pages/components/DiocesesMap"),
  {
    ssr: false,
  }
);

const DynamicMakeAChart = dynamic(
  () => import("@/pages/components/MakeAChart"),
  {
    ssr: false,
  }
);

const myLineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [
    31943, 29429, 29848, 28989, 30233, 30460, 28866, 10030, 17475, 23226, 26032,
  ],
  xAxisLabel: "Year",
  xAxisValues: [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ],
};

export default function Home() {
  console.log("Ora pro nobis, Carlo");
  return (
    <div>
      <div
        data-testid={"headerDiv"}
        className={"bg-[var(--colour-blue)] p-2.5"}
      >
        <div className="pl-1.5">
          <h1 role={"mainTitle"}>UK Catholic Data Dashboard</h1>
          <h2 role={"subheading"}>
            Showing Catholic data across England & Wales
          </h2>
          <p
            role={"betaNotice"}
            className={"pt-2.5 text-[var(--colour-offwhite)]"}
          >
            {" "}
            <strong className={"govuk-tag govuk-phase-banner__content__tag "}>
              Beta
            </strong>
            This is a new service - your feedback will help us to improve it.
          </p>
        </div>
      </div>
      <div role={"body"} className={styles.marginalisedBody}>
        <div data-testid={"massAttendanceSection"}>
          <h2
            role={"sectionHeader"}
            className={"govuk-heading-l govuk-!-margin-bottom-4"}
          >
            Headlines
          </h2>
          <div>
            <SkeletonChart />
          </div>
          <DynamicMakeAChart
            heading="Average Sunday Mass Attendance"
            contextParagraph="Average number of people attending Sunday Mass in the Diocese of Nottingham from September 2013. All data is sourced from the Catholic Directory entry for that year. Read more about the sources we use here."
            lineGraphData={myLineGraphProps}
          />
        </div>
      </div>

      <div className={styles.marginalisedBody}>
        <h2
          role={"sectionHeader"}
          className={"govuk-heading-l govuk-!-margin-bottom-4"}
        >
          Baptisms
        </h2>
        <DynamicMakeAChart
          heading="Another section"
          contextParagraph="Some context will go here"
          lineGraphData={myLineGraphProps}
        />
      </div>

      <div className={styles.marginalisedBody}>
        <DynamicHoverMap />
      </div>

      <div data-testid={"mapDiv"} className={styles.marginalisedBody}>
        <DynamicDiocesesMap />
      </div>
      <DashboardFooter />
    </div>
  );
}
