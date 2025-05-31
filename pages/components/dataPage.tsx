import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/pages/components/MakeAChart";
import { getNationalData } from "@/data/nationalStats";
import { DbKey } from "@/data/enums";

export type DataPageProps = {
  heading: string;
  rootTestId: string,
  accuracyComment: string;
  dataKey: DbKey;
};

function DataPage({ heading, rootTestId, accuracyComment, dataKey }: DataPageProps) {
  const nationalData = getNationalData(dataKey);
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 data-testid={`${rootTestId}PageTitle`} className="govuk-heading-xl">
          {heading}
        </h1>
         <div data-testid="citation">
          <b>Citation</b>
          <p data-testid="citationText">
            The data on this page comes from{" "}
            <i>
              <a data-testid="citationLink" className="govuk-link" href="https://www.crs.org.uk/catholicism-in-numbers">
                Catholicism in Numbers
              </a>
            </i>
            , a project by the Catholic Record Society.
            {
              // Move this to bibliography in About section
              /* Source:{" "}
          <i>"Catholicism in Numbers." </i>
          Catholic Record Society,
          https://www.crs.org.uk/catholicism-in-numbers. Accessed 31 May 2025.{" "} */
            }
          </p>
        </div>
        <b>Note on Accuracy of Data</b>
        <p>{accuracyComment}</p>
        <div data-testid={`${rootTestId}Chart`}>
          <MakeAChart
            heading={nationalData.chartData.heading}
            contextParagraph={nationalData.chartData.contextParagraph}
            lineGraphData={nationalData.chartData.lineGraphData}
          />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default DataPage;
