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
    { year: 2022, value: 62 },
    { year: 2021, value: 63 },
    { year: 2019, value: 59 },
    { year: 2010, value: 93 },
    { year: 2000, value: 138 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of East Anglia",
    subheading:
      "Receptions into the Catholic Church in the Diocese of East Anglia",
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
    { year: 2022, value: 16684 },
    { year: 2021, value: 12954 },
    { year: 2018, value: 18037 },
    { year: 2008, value: 23000 },
    { year: 1999, value: 22000 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of East Anglia",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const eastAngliaData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
