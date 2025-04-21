import PlotALineGraph from "./PlotALineGraph";
import { LineGraphProps } from "./PlotALineGraph";

import styles from "../../styles/MakeAChart.module.scss";

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
        <h3 role={"contextHeader"}>{heading}</h3>
        <i role={"contextParagraph"}>{contextParagraph}</i>
        <div role={"graph"}>
          <PlotALineGraph
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
