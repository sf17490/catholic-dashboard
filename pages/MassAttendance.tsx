import Link from "next/link";
import React from "react";
import DashboardFooter from "./components/DashboardFooter";
import dynamic from "next/dynamic";

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

//TODO: Abstract title + header into a navBar component
function MassAttendance() {
  return (
    <div>
      <title>UK Catholic Dashboard</title>
      <header className="govuk-header border-none" data-testid="headerSection">
        <div className="relative">
          <div className="govuk-width-container relative flow-root">
            <div className="govuk-header__content govuk-!-padding-top-2 inline w-auto">
              <Link
                data-testid="homePageLink"
                href="/"
                className="govuk-header__link govuk-header__service-name"
              >
                Catholic Data Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="m-10">
        <h1 data-testid="massAttendancePageTitle" className="govuk-heading-xl">
          Mass Attendance
        </h1>
        <p>Mass Attendance. </p>
        <div data-testid="massAttendanceChart">
          <DynamicMakeAChart
            heading="Average Sunday Mass Attendance"
            contextParagraph="Average number of people attending Sunday Mass in the Diocese of Nottingham from September 2013. All data is sourced from the Catholic Directory entry for that year. Read more about the sources we use here."
            lineGraphData={myLineGraphProps}
          />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default MassAttendance;
