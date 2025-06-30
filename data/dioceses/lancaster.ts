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
    { year: 2022, value: 35 },
    { year: 2021, value: 29 },
    { year: 2019, value: 44 },
    { year: 2010, value: 79 },
    { year: 2000, value: 104 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Lancaster",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Lancaster",
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
    { year: 2022, value: 11279 },
    { year: 2021, value: 8840 },
    { year: 2018, value: 15209 },
    { year: 2008, value: 21130 },
    { year: 1999, value: 29551 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Lancaster",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const lancasterData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
