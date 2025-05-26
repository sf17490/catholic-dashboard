import { Datum } from "plotly.js";
import { CleanedDioceseName, DbKey, DioceseName } from "./enums";
import { LineGraphProps } from "@/pages/components/PlotALineGraph";

interface DioceseData {
  chartData: {
    heading: string;
    contextParagraph: string;
    lineGraphData: LineGraphProps;
  };
}
//CHANGEME to use full list
const briefDioceseList = ["Arundel_and_Brighton", "Birmingham"] as const;
type briefCleanedDioceseName = (typeof briefDioceseList)[number];

type DetailedLineGraphProps = {
  yAxisLabel: string;
  yAxisValues: Datum[];
  xAxisLabel: string;
  xAxisValues: Datum[];
  markerColour: string;
};

type ChartData = {
  lineGraphData: DetailedLineGraphProps;
};

export type MultiLineGraphProps = {
  name: DioceseName;
  massAttendance: ChartData;
  //TODO: Percent change may be better comparison
  //massAttendanceRelative1999: ChartData
};

//stop exporting this?
 const dioceseMassAttendances: Record<
  CleanedDioceseName,
  MultiLineGraphProps
> = {
  Arundel_and_Brighton: {
    name: "Arundel & Brighton",
    massAttendance: {
      lineGraphData: {
        yAxisLabel: "Number attending Mass",
        yAxisValues: [40509, 41469, 29471, 11739, 25789],
        xAxisLabel: "Year",
        xAxisValues: [1999, 2008, 2018, 2021, 2022],
        markerColour: "blue",
      },
    }
  },
  Birmingham: {
    name: "Birmingham",
    massAttendance: {
      lineGraphData: {
        yAxisLabel: "Number attending Mass",
        yAxisValues: [82691, 76152, 57711, 30702, 37117],
        xAxisLabel: "Year",
        xAxisValues: [1999, 2008, 2018, 2021, 2022],
        markerColour: "green",
      },
    },
  },
  Brentwood: {
    name: "Brentwood",
    massAttendance: {
      lineGraphData: {
        yAxisLabel: "Number attending Mass",
        yAxisValues: [47800, 48000, 41740, 24964, 30230],
        xAxisLabel: "Year",
        xAxisValues: [1999, 2008, 2018, 2021, 2022],
        markerColour: "red",
      },
    },
  },
  Westminster: {
    name: "Westminster",
    massAttendance: {
         lineGraphData: {
        yAxisLabel: "Number attending Mass",
        yAxisValues: [154042, 151668, 127340, 74308,90202],
        xAxisLabel: "Year",
        xAxisValues: [1999, 2008, 2018, 2021, 2022],
        markerColour: "purple",
      },
    },
  },
  Wrexham:{
    name: "Wrexham",
    massAttendance:{
         lineGraphData: {
        yAxisLabel: "Number attending Mass",
        yAxisValues: [8638,7500,5142,2602,3702],
        xAxisLabel: "Year",
        xAxisValues: [1999, 2008, 2018, 2021, 2022],
        markerColour: "pink",
      },
    }
  }
};

export const SimpleDioceseDb = {
  dioceseMassAttendances: dioceseMassAttendances,
};

export function getDioceseData(keyName: briefCleanedDioceseName) {
  return SimpleDioceseDb.dioceseMassAttendances[keyName];
}
