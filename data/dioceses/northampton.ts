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
    { year: 2022, value: 37 },
    { year: 2021, value: 29 },
    { year: 2019, value: 103 },
    { year: 2010, value: 137 },
    { year: 2000, value: 136 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Northampton",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Northampton",
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
    { year: 2022, value: 20262 },
    { year: 2021, value: 15980 },
    { year: 2018, value: 26934 },
    { year: 2008, value: 29027 },
    { year: 1999, value: 32295 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Northampton",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const northamptonData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
