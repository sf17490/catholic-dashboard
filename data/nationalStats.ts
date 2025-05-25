import { DbKey } from "./enums";
import { LineGraphProps } from "@/pages/components/PlotALineGraph";

interface NationalData {
  chartData: {
    heading: string;
    contextParagraph: string;
    lineGraphData: LineGraphProps;
  };
}

const nationalConversions: LineGraphProps = {
  yAxisLabel: "Converts to Catholicism",
  yAxisValues: [4402, 4615, 2674, 1537, 1976],
  xAxisLabel: "Year",
  xAxisValues: [2000, 2010, 2019, 2021, 2022],
};

const nationalConversionsData: NationalData = {
  chartData: {
    heading: "Conversions to Catholicism in England & Wales",
    contextParagraph: "Receptions into the Catholic Church in England & Wales (Is this adults only?)",
    lineGraphData: nationalConversions,
  },
};

const nationalMassAttendance: LineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};

const nationalMassAttendanceData: NationalData = {
  chartData: {
    heading: "Typical Sunday Mass Attendance",
    contextParagraph: "Typical number of people attending Sunday Mass in England & Wales",
    lineGraphData: nationalMassAttendance,
  },
};



export const SimpleDb2 = {
  nationalConversions: nationalConversionsData,
  nationalMassAttendance: nationalMassAttendanceData
}

export function getNationalData(keyName: DbKey){
  return SimpleDb2[keyName]
}

export const SimpleDb = {
  nationalMassAttendance: nationalMassAttendance,
  nationalConversions: nationalConversions,
};

export function getData(keyName: DbKey) {
  return SimpleDb[keyName];
}
