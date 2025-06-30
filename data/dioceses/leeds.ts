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
    { year: 2022, value: 72 },
    { year: 2021, value: 59 },
    { year: 2019, value: 86 },
    { year: 2010, value: 164 },
    { year: 2000, value: 174 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Leeds",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Leeds",
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
    { year: 2022, value: 18392 },
    { year: 2021, value: 14206 },
    { year: 2018, value: 25768 },
    { year: 2008, value: 32905 },
    { year: 1999, value: 42226 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Leeds",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const leedsData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
