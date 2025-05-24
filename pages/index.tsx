import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import DashboardFooter from "./components/DashboardFooter";
import SkeletonChart from "./components/SkeletonChart";
import Link from "next/link";

const DynamicHoverMap = dynamic(
  () => import("@/pages/components/maps/MiniMap"),
  {
    ssr: false,
  }
);

const DynamicDiocesesMap = dynamic(
  () => import("@/pages/components/maps/DiocesesMap"),
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
      <title>UK Catholic Dashboard</title>
      <div
        data-testid={"headerDiv"}
        className={"bg-[var(--colour-blue)] p-2.5"}
      >
        <div className="pl-1.5">
          <h1 role={"mainTitle"}>UK Catholic Data Dashboard</h1>
          <h2 role={"subheading"}>
            Showing Catholic data across England & Wales
          </h2>
          <Link
            data-testid="aboutLink"
            href="about"
            className={
              "govuk-footer__link pt-2.5 text-[var(--colour-offwhite)]"
            }
          >
            What is the Data Dashboard?
          </Link>

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
            <SkeletonChart rootTestId="massAttendance" heading="Mass Attendance" subheader="Sunday Mass attendance by year"/>
          </div>
          <div>
            <SkeletonChart rootTestId="conversions" heading="Conversions" subheader="Adult Receptions into the Church by year"/>
          </div>
        </div>
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
