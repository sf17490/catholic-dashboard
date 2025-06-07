import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/components/MakeAChart";
import { getNationalData } from "@/data/nationalStats";
import { DbKey } from "@/data/enums";
import Table from "./Table";
import { LineGraphProps } from "./PlotALineGraph";

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
  const nationalDataTable = getNationalData(dataKey);

  const conversionsLineGraphData: LineGraphProps = {
    xAxisLabel: nationalDataTable.data.columnHeadings.keyColumn,
    yAxisLabel: nationalDataTable.data.columnHeadings.valueColumn,
    xAxisValues: nationalDataTable.data.rowData.map((row) => row.year),
    yAxisValues: nationalDataTable.data.rowData.map((row) => row.value),
  };

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
        <div data-testid="dataDisplayBox" className="bg-[var(--colour-grey-3)]">
          <div
            data-testid="dataDisplayBoxContents"
            className="m-6 pt-2 pb-0.25"
          >
            <div data-testid={`${rootTestId}Chart`}>
              <MakeAChart
                heading={nationalDataTable.context.heading}
                contextParagraph={nationalDataTable.context.contextParagraph}
                lineGraphData={conversionsLineGraphData}
              />
            </div>
            <div>
              <div data-testid={"tableSection"} className="">
                <Table
                  columns={nationalDataTable.data.columnHeadings}
                  rows={nationalDataTable.data.rowData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}

export default DataPage;
