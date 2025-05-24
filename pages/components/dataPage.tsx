import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/pages/components/MakeAChart";

const myLineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};

export type DataPageProps = {
  heading: string;
  accuracyComment: string
//   contextParagraph: string;
//   lineGraphData: LineGraphProps;
};

function DataPage({heading, accuracyComment}:DataPageProps) {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 data-testid="massAttendancePageTitle" className="govuk-heading-xl">
          {heading}
        </h1>
        <b>Note on Accuracy of Data</b>
        <p>{accuracyComment}</p>
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

export default DataPage;
