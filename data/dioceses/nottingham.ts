import { DioceseData, TableData, TopicData } from "../dataTypes";
import {
  CONVERSIONS_ACCURACY_STATEMENT,
  MA_ACCURACY_STATEMENT,
} from "../strings";

const conversionsTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Converts to Catholicism",
  },
  rowData: [
    { year: 2022, value: 83 },
    { year: 2021, value: 41 },
    { year: 2019, value: 117 },
    { year: 2010, value: 194 },
    { year: 2000, value: 155 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Nottingham",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Nottingham",
  },
  tableData: conversionsTable,
  accuracy: CONVERSIONS_ACCURACY_STATEMENT,
};

const MassAttendanceTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Number attending Mass",
  },
  rowData: [
    { year: 2022, value: 23200 },
    { year: 2021, value: 17468 },
    { year: 2018, value: 30730 },
    { year: 2008, value: 32262 },
    { year: 1999, value: 33207 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Nottingham",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const nottinghamData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
