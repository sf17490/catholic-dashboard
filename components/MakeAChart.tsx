import { LineGraphProps } from "./PlotALineGraph";

import dynamic from "next/dynamic";

function setPlaceholderImage(pageName: string) {
  if (pageName.match(/Mass Attendance/)) {
    return "images/minimalist_National_Mass_Attendance.png";
  } else {
    return "images/minimalist_National_Conversions.png";
  }
}

export type ChartProps = {
  heading: string;
  contextParagraph: string;
  lineGraphData: LineGraphProps;
};

export default function MakeAChart({
  heading,
  contextParagraph,
  lineGraphData,
}: ChartProps) {
  const DynamicPlotALineGraph = dynamic(
    () => import("@/components/PlotALineGraph"),
    {
      ssr: false,
      loading: () => (
        <div>
          <img
            data-testid="placeholderChartImage"
            src={setPlaceholderImage(heading)}
            width="50%"
          />
          <p data-testid="placeholderText">Loading graph...</p>
        </div>
      ),
    }
  );

  return (
    <div>
      <h3 role={"contextHeader"} className={"govuk-heading-m mb-1"}>
        {heading}
      </h3>
      <i role={"contextParagraph"}>{contextParagraph}</i>
      <div role={"graph"}>
        <DynamicPlotALineGraph
          yAxisLabel={lineGraphData.yAxisLabel}
          yAxisValues={lineGraphData.yAxisValues}
          xAxisLabel={lineGraphData.xAxisLabel}
          xAxisValues={lineGraphData.xAxisValues}
          widthHeightStyle={{
            width: "100%",
            height: 270,
            margin: 0,
          }}
        />
      </div>
    </div>
  );
}
