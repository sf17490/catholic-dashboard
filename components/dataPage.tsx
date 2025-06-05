import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/components/MakeAChart";
import { getNationalData } from "@/data/nationalStats";
import { DbKey } from "@/data/enums";

export type DataPageProps = {
  heading: string;
  rootTestId: string;
  accuracyComment: string;
  dataKey: DbKey;
};

function DataPage({
  heading,
  rootTestId,
  accuracyComment,
  dataKey,
}: DataPageProps) {
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
              <a
                data-testid="citationLink"
                className="govuk-link"
                href="https://www.crs.org.uk/catholicism-in-numbers"
              >
                Catholicism in Numbers
              </a>
            </i>
            , a project by the Catholic Record Society.
          </p>
        </div>
        {accuracyComment.length > 0 ? (
          <div data-testid={`${rootTestId}Accuracy`}>
            <b>Note on Accuracy of Data</b>
            <p>{accuracyComment}</p>
          </div>
        ) : (
          ""
        )}
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
