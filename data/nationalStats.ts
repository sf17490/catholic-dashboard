import { TableColumns, TableRow } from "@/components/Table";
import { DbKey } from "./enums";

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
    // { year: 1990, value: 5075 },
    // { year: 1980, value: 5783 },
    // { year: 1971, value: 5747 }, //Warning: Includes some figures for 1970. See CTS notes
    // { year: 1960, value: 14483 }, //Yes, really. Not a typo.
  ],
};

const nationalConversionsData = {
  context: {
    heading: "Conversions to Catholicism in England & Wales",
    contextParagraph: "Receptions into the Catholic Church in England & Wales", //Is this adults only?
  },
  data: nationalConversionsTable,
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
    // { year: 1989, value: 1337299 },
  ],
};

const nationalMassAttendanceData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    contextParagraph:
      "Typical number of people attending Sunday Mass in England & Wales",
  },
  data: nationalMassAttendanceTable,
};

export const SimpleDb = {
  nationalConversions: nationalConversionsData,
  nationalMassAttendance: nationalMassAttendanceData,
};

export function getNationalData(keyName: DbKey) {
  return SimpleDb[keyName];
}
