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
    <div data-testid="plottedLineGraph">
    <Plot
      data={[
        {
          x: xAxisValues,
          y: yAxisValues,
          type: "scatter",
          mode: "lines",
          marker: { color: "#000066" },
        },
      ]}
      layout={{
        autosize: true,
        margin: { t: 50, b: 60, l: 60, r: 30 },
        xaxis: {
          title: {
            //text: xAxisLabel,
            font: {
              size: 18,
            },
          },
          //range:[0,1000000]
          tickvals: [2000,2022],
          showgrid:false
        },
        yaxis: {
          title: {
            //text: yAxisLabel,
            font: {
              size: 18,
            },
          },
          tickvals: [1000000],
          showgrid:false
        },
        plot_bgcolor:"transparent",
        paper_bgcolor:"transparent"
      }}
      style={{ width: "90%", height: "100%", minHeight:175, padding: "1.5em", margin: 0 }} //TODO: Move this style to a real class please. And test for minHeight. Or save for when we do snapshot testing
      useResizeHandler={true}
      config={{
        displayModeBar: true //TODO: Consider switching this on
         
      }}
    />
    </div>
  );
}
