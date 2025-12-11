import { LineGraphProps } from "@/components/PlotALineGraph";

export const expectedNationalConversionsLineGraphProps: LineGraphProps = {
  xAxisLabel: "Year",
  yAxisLabel: "Converts to Catholicism",
  xAxisValues: [2022, 2021, 2019, 2010, 2000],
  yAxisValues: [1976, 1537, 2674, 4615, 4402],
};

export const expectedNationalMassAttendanceLineGraphProps: LineGraphProps = {
  xAxisLabel: "Year",
  yAxisLabel: "Number attending Mass",
  xAxisValues: [2024, 2023, 2022, 2021, 2018, 2008, 1999],
  yAxisValues: [575453, 552631, 503008, 390236, 712909, 885169, 1005522],
};
