import dynamic from "next/dynamic";
import { getPlotLineData, SimpleDioceseDb } from "@/data/dioceseStats";
import { cleanedDioceseNames } from "@/data/enums";

const DynamicPlotMultipleLinesGraph = dynamic(
  () => import("@/pages/components/PlotMultipleLinesGraph"),
  {
    ssr: false,
    loading: () => (
      <img
        data-testid="placeholderShrekImage"
        src="https://www.whatspaper.com/wp-content/uploads/2022/01/shrek-wallpaper-whatspaper-2.jpg"
        //TODO: use a professional image here. Perhaps a static image of the graph?
        width="50%"
      />
    ),
  }
);


export default function MakeAComplexChart() {
  return (
    <div data-testid="MAByDioceseChart">
      <p>This is the complex chart. </p>
      <div data-testid="complexChartContainer">
        <DynamicPlotMultipleLinesGraph
          data-testid="complexChart"
          yAxisLabel="Number attending Mass"
          xAxisLabel="Year"
          data={SimpleDioceseDb.diocesesData}
        />
      </div>
    </div>
  );
}
