import Plot from "react-plotly.js";
import { Datum } from "plotly.js";

export type LineGraphProps = {
  yAxisLabel: string;
  yAxisValues: Datum[];
  xAxisLabel: string;
  xAxisValues: Datum[];
};

//TODO: Snapshot test this. Atm the only real "test" is looking at the rendered webpage myself
export default function PlotALineGraph({
  yAxisLabel,
  yAxisValues,
  xAxisLabel,
  xAxisValues,
}: LineGraphProps) {
  return (
    <div data-testid="plottedLineGraph">
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
        style={{
          width: "100%",
          height: 270, //we set an exact height here to fix bug where graph gets longer and longer as you scroll on mobile
          margin: 0,
        }} //TODO: Move this style to a real class please. And test for minHeight. Or save for when we do snapshot testing
        useResizeHandler={true}
        config={{
          displayModeBar: false,
        }}
      />
    </div>
  );
}

//FYI: Use the PlotALineGraph function below if you want to make a skeleton outline graph for the homepage

// export default function PlotALineGraph({
//   yAxisLabel,
//   yAxisValues,
//   xAxisLabel,
//   xAxisValues,
// }: LineGraphProps) {
//   return (
//     <div data-testid="plottedLineGraph">
//       <Plot
//         data={[
//           {
//             x: xAxisValues,
//             y: yAxisValues,
//             type: "scatter",
//             mode: "lines",
//             marker: { color: "#000066" },
//           },
//         ]}
//         layout={{
//           autosize: true,
//           margin: { t: 50, b: 30, l: 50, r: 30 }, //adjust the l margin to suit the width of the label
//           xaxis: {
//             title: {
//               //text: xAxisLabel,
//               font: {
//                 size: 18,
//               },
//             },
//             //range:[0,1000000]
//             tickvals: [2000, 2022],
//             tickfont: {
//               size: 18,
//               color: "black",
//             },
//             showgrid: false,
//           },
//           yaxis: {
//             title: {
//               //text: yAxisLabel,
//             },
//             tickvals: [4600], //Adjust to suit max data value
//             range: [0, 4700], //Adjust to suit max data value
//             tickfont: {
//               size: 18,
//               color: "black",
//             },
//             zeroline: false,
//             showgrid: false,
//           },
//           plot_bgcolor: "transparent",
//           paper_bgcolor: "transparent",
//         }}
//         style={{
//           width: "90%",
//           height: "100%",
//           minHeight: 175,
//           padding: "1.5em",
//           margin: 0,
//         }} //TODO: Move this style to a real class please. And test for minHeight. Or save for when we do snapshot testing
//         useResizeHandler={true}
//         config={{
//           displayModeBar: true, //TODO: Consider switching this on
//           toImageButtonOptions: {
//             height: 300,
//             width: 550,
//             scale: 2,
//           },
//         }}
//       />
//     </div>
//   );
// }
