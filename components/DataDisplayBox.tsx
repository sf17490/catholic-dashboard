import { LineGraphProps } from "./PlotALineGraph";
import MakeAChart from "./MakeAChart";
import Table from "./Table";
import { TopicData } from "@/data/dataTypes";

export type DisplayBoxProps = {
  rootTestId: string;
  topic: TopicData;
};

function DataDisplayBox({ rootTestId, topic }: DisplayBoxProps) {
  const lineGraphDataforConverts: LineGraphProps = {
    xAxisLabel: topic.tableData.columnHeadings.keyColumn,
    yAxisLabel: topic.tableData.columnHeadings.valueColumn,
    xAxisValues: topic.tableData.rowData.map((row) => row.year),
    yAxisValues: topic.tableData.rowData.map((row) => row.value),
  };

  return (
    <div
      data-testid={`${rootTestId}DataDisplayBox`}
      className="bg-[var(--colour-grey-3)]"
    >
      <div
        data-testid={`${rootTestId}DataDisplayBoxContents`}
        className="m-6 pt-2 pb-0.25"
      >
        <div data-testid={`${rootTestId}ChartSection`}>
          <MakeAChart
            heading={topic.context.heading}
            contextParagraph={topic.context.subheading}
            lineGraphData={lineGraphDataforConverts}
          />
        </div>
        <div>
          <div data-testid={`${rootTestId}TableSection`}>
            <Table
              columns={topic.tableData.columnHeadings}
              rows={topic.tableData.rowData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataDisplayBox;
