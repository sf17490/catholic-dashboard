import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/pages/components/MakeAChart";
import { getNationalData } from "@/data/nationalStats";
import { DbKey } from "@/data/enums";
import PlotMultipleLinesGraph from "./PlotMultipleLinesGraph";
import MakeAComplexChart from "./MakeAComplexChart";

export type DataPageProps = {
  heading: string;
  accuracyComment: string;
  dataKey: DbKey;
};

function DataPage({ heading, accuracyComment, dataKey }: DataPageProps) {
  const nationalData = getNationalData(dataKey);
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
            heading={nationalData.chartData.heading}
            contextParagraph={nationalData.chartData.contextParagraph}
            lineGraphData={nationalData.chartData.lineGraphData}
          />
        </div>
      </div>


    </div>
  );
}

export default DataPage;
