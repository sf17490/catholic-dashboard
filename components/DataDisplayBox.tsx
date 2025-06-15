import { getDioceseData } from "@/data/dioceseStats";
import { DioceseDbKey } from "@/data/enums";
import { LineGraphProps } from "./PlotALineGraph";
import MakeAChart from "./MakeAChart";
import Table from "./Table";

export type DisplayBoxProps = {
  rootTestId: string;
  dioceseDataKey: DioceseDbKey;
};

function DataDisplayBox({ rootTestId, dioceseDataKey }: DisplayBoxProps) {
  const dioceseDataTable = getDioceseData(dioceseDataKey);

  const lineGraphDataforConverts: LineGraphProps = {
    xAxisLabel: dioceseDataTable.data.columnHeadings.keyColumn,
    yAxisLabel: dioceseDataTable.data.columnHeadings.valueColumn,
    xAxisValues: dioceseDataTable.data.rowData.map((row) => row.year),
    yAxisValues: dioceseDataTable.data.rowData.map((row) => row.value),
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
            heading={dioceseDataTable.context.heading}
            contextParagraph={dioceseDataTable.context.contextParagraph}
            lineGraphData={lineGraphDataforConverts}
          />
        </div>
        <div>
          <div data-testid={`${rootTestId}TableSection`}>
            <Table
              columns={dioceseDataTable.data.columnHeadings}
              rows={dioceseDataTable.data.rowData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataDisplayBox;
