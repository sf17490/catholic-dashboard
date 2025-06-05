import styles from "../styles/Home.module.scss";
import DashboardFooter from "../components/DashboardFooter";
import SkeletonChart from "../components/SkeletonChart";
import HomePageHeader from "../components/HomePageHeader";

export default function Home() {
  console.log("Ora pro nobis, Carlo");
  return (
    <div>
      <HomePageHeader />
      <div role={"body"} className={styles.marginalisedBody}>
        <div>
          <h2
            role={"sectionHeader"}
            className={"govuk-heading-l govuk-!-margin-bottom-4"}
          >
            Headlines
          </h2>
          <div
            data-testid="skeletonContainer"
            className="mb-3 grid gap-4 sm:mb-6 md:grid-cols-[1fr_1fr]"
          >
            <div>
              <SkeletonChart
                rootTestId="massAttendance"
                heading="Mass Attendance"
                subheader="Sunday Mass attendance by year"
                href="massAttendance"
              />
            </div>
            <div>
              <SkeletonChart
                rootTestId="conversions"
                heading="Conversions"
                subheader="Receptions into the Church by year"
                href="conversions"
              />
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}
