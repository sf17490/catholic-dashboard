import PlotALineGraph from "./PlotALineGraph";
import { LineGraphProps } from "./PlotALineGraph";

import styles from "../../styles/MakeAChart.module.scss";

import dynamic from "next/dynamic";

const DynamicPlotALineGraph = dynamic(
  () => import("@/pages/components/PlotALineGraph"),
  {
    ssr: false,
    loading: () => (
      <img data-testid="placeholderChartImage"
      src="images/minimalist_National_Mass_Attendance.png" 
      //TODO: pass placeholder image based on topic of page and test accordingly! 
      width="50%"/>
    
    )
  },
);

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
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartContents}>
        <h3 role={"contextHeader"} className={"govuk-heading-m mb-1"}>{heading}</h3>
        <i role={"contextParagraph"}>{contextParagraph}</i>
        <div role={"graph"}>
          <DynamicPlotALineGraph
            yAxisLabel={lineGraphData.yAxisLabel}
            yAxisValues={lineGraphData.yAxisValues}
            xAxisLabel={lineGraphData.xAxisLabel}
            xAxisValues={lineGraphData.xAxisValues}
          />
        </div>
      </div>
    </div>
  );
}
