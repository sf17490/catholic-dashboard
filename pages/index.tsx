import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import DashboardFooter from "./components/DashboardFooter";
import SkeletonChart from "./components/SkeletonChart";
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
