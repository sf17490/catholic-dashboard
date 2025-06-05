import { LineGraphProps } from "@/components/PlotALineGraph";

export const expectedNationalConversionsLineGraphProps: LineGraphProps = {
  yAxisLabel: "Converts to Catholicism",
  yAxisValues: [4402, 4615, 2674, 1537, 1976],
  xAxisLabel: "Year",
  xAxisValues: [2000, 2010, 2019, 2021, 2022],
};

export const expectedNationalMassAttendanceLineGraphProps: LineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};
