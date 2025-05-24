import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import DashboardFooter from "./components/DashboardFooter";
import SkeletonChart from "./components/SkeletonChart";
import Link from "next/link";
import HomePageHeader from "./components/HomePageHeader";

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
      <HomePageHeader />
      <div role={"body"} className={styles.marginalisedBody}>
        <div data-testid={"massAttendanceSection"}>
          <h2
            role={"sectionHeader"}
            className={"govuk-heading-l govuk-!-margin-bottom-4"}
          >
            Headlines
          </h2>
          <div>
            <SkeletonChart
              rootTestId="massAttendance"
              heading="Mass Attendance"
              subheader="Sunday Mass attendance by year"
            />
          </div>
          <div>
            <SkeletonChart
              rootTestId="conversions"
              heading="Conversions"
              subheader="Adult Receptions into the Church by year"
            />
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
