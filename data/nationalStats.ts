import { TableColumns, TableRow } from "@/components/Table";
import { DbKey } from "./enums";
import { LineGraphProps } from "@/components/PlotALineGraph";

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

type TableData = {
  columnHeadings: TableColumns;
  rowData: TableRow[];
};

const nationalConversionsTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Converts to Catholicism",
  },
  rowData: [
    { year: 2022, value: 1976 },
    { year: 2021, value: 1537 },
    { year: 2019, value: 2674 },
    { year: 2010, value: 4615 },
    { year: 2000, value: 4402 },
  ],
};

const nationalConversionsData: NationalData = {
  chartData: {
    heading: "Conversions to Catholicism in England & Wales",
    contextParagraph: "Receptions into the Catholic Church in England & Wales", //Is this adults only?
    lineGraphData: nationalConversions,
  },
};

const nationalConversionsData2 = {
  context: {
    heading: "Conversions to Catholicism in England & Wales",
    contextParagraph: "Receptions into the Catholic Church in England & Wales", //Is this adults only?
  },
  data: nationalConversionsTable,
};

const nationalMassAttendance: LineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};

const nationalMassAttendanceTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Number attending Mass",
  },
  rowData: [
    { year: 2022, value: 503008 },
    { year: 2021, value: 390236 },
    { year: 2018, value: 712909 },
    { year: 2008, value: 885169 },
    { year: 1999, value: 1005522 },
  ],
};

const nationalMassAttendanceData: NationalData = {
  chartData: {
    heading: "Typical Sunday Mass Attendance",
    contextParagraph:
      "Typical number of people attending Sunday Mass in England & Wales",
    lineGraphData: nationalMassAttendance,
  },
};

const nationalMassAttendanceData2 = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    contextParagraph: "Typical number of people attending Sunday Mass in England & Wales"
  },
  data: nationalMassAttendanceTable,
};

export const SimpleDb = {
  nationalConversions: nationalConversionsData,
  nationalMassAttendance: nationalMassAttendanceData,
};


const SimpleDb2 = {
  nationalConversions: nationalConversionsData2,
  nationalMassAttendance: nationalMassAttendanceData2
}

export function getNationalData2(keyName: DbKey) {
  return SimpleDb2[keyName];
}
