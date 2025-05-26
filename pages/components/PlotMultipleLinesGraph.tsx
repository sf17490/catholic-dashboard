import Plot from "react-plotly.js";
import { Data, Datum } from "plotly.js";
import { MultiLineGraphProps } from "@/data/dioceseStats";
import { CleanedDioceseName } from "@/data/enums";

export type LineGraphProps = {
  yAxisLabel: string;
  yAxisValues: Datum[];
  xAxisLabel: string;
  xAxisValues: Datum[];
};

function convertToPlotLineData(
  dbData: Record<CleanedDioceseName, MultiLineGraphProps>
) {
  return Object.values(dbData).map((dioceseData) => {
    return {
      x: dioceseData.massAttendance.lineGraphData.xAxisValues,
      y: dioceseData.massAttendance.lineGraphData.yAxisValues,
      mode: "lines+markers",
      marker: {
        color: dioceseData.massAttendance.lineGraphData.markerColour,
      },
      name: dioceseData.name,
    };
  });
}

export type MutliDioceseChartProps = {
  yAxisLabel: string;
  xAxisLabel: string;
  data: Record<CleanedDioceseName, MultiLineGraphProps>;
};

//TODO: Snapshot test this. Atm the only real "test" is looking at the rendered webpage myself
export default function PlotMultipleLinesGraph({
  yAxisLabel,
  xAxisLabel,
  data,
}: MutliDioceseChartProps) {
  const plotLineData: Data[] = convertToPlotLineData(data);
  console.log(plotLineData);

  return (
    <div data-testid="plottedLineGraph">
      <Plot
        data={plotLineData}
        layout={{
          autosize: true,
          margin: { t: 50, b: 60, l: 60, r: 30 },
          xaxis: {
            title: {
              text: xAxisLabel,
              font: {
                size: 18,
              },
            },
          },
          yaxis: {
            title: {
              text: yAxisLabel,
              font: {
                size: 18,
              },
            },
          },
        }}
        style={{
          width: "90%",
          height: "100%",
          minHeight: 175,
          padding: "1.5em",
          margin: 0,
        }} //TODO: Move this style to a real class please. And test for minHeight. Or save for when we do snapshot testing
        useResizeHandler={true}
        config={{
          displayModeBar: false, //TODO: Consider switching this on
        }}
      />
    </div>
  );
}
