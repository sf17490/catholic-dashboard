import { LineGraphProps } from "./PlotALineGraph";

import styles from "../../styles/MakeAChart.module.scss";

import dynamic from "next/dynamic";

const DynamicPlotALineGraph = dynamic(
  () => import("@/pages/components/PlotALineGraph"),
  {
    ssr: false,
    loading: () => (
      <img
        data-testid="placeholderChartImage"
        src="https://www.whatspaper.com/wp-content/uploads/2022/01/shrek-wallpaper-whatspaper-2.jpg"
        //TODO: use a professional image here. Perhaps a static image of the graph?
        width="50%"
      />
    ),
  }
);

const DynamicPlotMultipleLinesGraph = dynamic(
  () => import("@/pages/components/PlotMultipleLinesGraph"),
  {
    ssr: false,
    loading: () => (
      <img
        data-testid="placeholderChartImage"
        src="https://www.whatspaper.com/wp-content/uploads/2022/01/shrek-wallpaper-whatspaper-2.jpg"
        //TODO: use a professional image here. Perhaps a static image of the graph?
        width="50%"
      />
    ),
  }
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
          />
        </div>
      </div>
    </div>
  );
}
