import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/pages/components/MakeAChart";
import { getData, SimpleDb } from "@/data/nationalStats";
import { DbKey } from "@/data/enums";

export type DataPageProps = {
  heading: string;
  accuracyComment: string
  dataKey: DbKey
};

const test = "nationalConversions"

function DataPage({heading, accuracyComment, dataKey}:DataPageProps) {
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
            lineGraphData={getData(dataKey)}
          />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default DataPage;
