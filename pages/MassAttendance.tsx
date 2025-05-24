import React from "react";
import DashboardFooter from "./components/DashboardFooter";
import NavBar from "./components/NavBar";
import MakeAChart from "@/pages/components/MakeAChart";

const myLineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};

function MassAttendance() {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 data-testid="massAttendancePageTitle" className="govuk-heading-xl">
          Mass Attendance
        </h1>
        <b>Note on Accuracy of Data</b>
        <p>
          The accuracy with which attendance is counted may vary. A person may
          accidentally be counted twice and figures may overstate or understate
          where an estimate is required, such as at very large services or if
          mechanical means of counting fail. Additionally, approaches to
          counting may vary across churches in a diocese or nation. (Copied from Catholicism in Numbers)
        </p>
        <div data-testid="massAttendanceChart">
          <MakeAChart
            heading="Typical Sunday Mass Attendance"
            contextParagraph="Typical number of people attending Sunday Mass in England & Wales"
            lineGraphData={myLineGraphProps}
          />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default MassAttendance;
