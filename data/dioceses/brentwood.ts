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
    { year: 2022, value: 109 },
    { year: 2021, value: 64 },
    { year: 2019, value: 129 },
    { year: 2010, value: 257 },
    { year: 2000, value: 297 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Brentwood",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Brentwood",
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
    { year: 2022, value: 30230 },
    { year: 2021, value: 24964 },
    { year: 2018, value: 41740 },
    { year: 2008, value: 48000 },
    { year: 1999, value: 47800 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Brentwood",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const brentwoodData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
