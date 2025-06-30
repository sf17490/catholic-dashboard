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
    { year: 2022, value: 43 },
    { year: 2021, value: 36 },
    { year: 2019, value: 45 },
    { year: 2010, value: 126 },
    { year: 2000, value: 166 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Plymouth",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Plymouth",
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
    { year: 2022, value: 10307 },
    { year: 2021, value: 7220 },
    { year: 2018, value: 12702 },
    { year: 2008, value: 16500 },
    { year: 1999, value: 18928 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Plymouth",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const plymouthData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
