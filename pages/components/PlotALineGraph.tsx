import Plot from "react-plotly.js";
import { Datum } from "plotly.js";

export type LineGraphProps = {
    yAxisLabel: string
    yAxisValues: Datum[]
    xAxisLabel: string,
    xAxisValues: Datum[]
}

//TODO: Snapshot test this. Atm the only real "test" is looking at the rendered webpage myself
export default function PlotALineGraph({yAxisLabel, yAxisValues, xAxisLabel, xAxisValues}: LineGraphProps) {
  return (
    <Plot
      data={[
        {
          x: xAxisValues,
          y: yAxisValues,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#000066" },
        },
      ]}
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
      style={{ width: "95%", height: "100%", padding: "1.5em", margin: 0 }}
      useResizeHandler={true}
    />
  );
}
