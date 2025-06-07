import React from "react";
import DashboardFooter from "./DashboardFooter";
import NavBar from "./NavBar";
import MakeAChart from "@/components/MakeAChart";
import {  getNationalData2 } from "@/data/nationalStats";
import { DbKey } from "@/data/enums";
import Table, { TableColumns, TableProps } from "./Table";
import { LineGraphProps } from "./PlotALineGraph";

const dummyTableColumnData: TableColumns = {
  keyColumn: "Year",
  valueColumn: "Converts to Catholicism in England & Wales",
};

const dummyTableRowData = [
  { year: 2022, value: 1976 },
  { year: 2021, value: 1537 },
  { year: 2019, value: 2674 },
];

const dummyTableData: TableProps = {
  columns: dummyTableColumnData,
  rows: dummyTableRowData,
};

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
  const _ = dataKey
  const nationalDataTable = getNationalData2(dataKey);

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
        <div data-testid={`${rootTestId}Chart`}>
          <MakeAChart
            heading={nationalDataTable.context.heading}
            contextParagraph={nationalDataTable.context.contextParagraph}
            lineGraphData={conversionsLineGraphData}
          />
        </div>
        <div data-testid={"tableSection"}>
          <Table
            columns={nationalDataTable.data.columnHeadings}
            rows={nationalDataTable.data.rowData}
          />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}

export default DataPage;
