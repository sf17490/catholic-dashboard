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
    { year: 2022, value: 67 },
    { year: 2021, value: 96 },
    { year: 2019, value: 128 },
    { year: 2010, value: 197 },
    { year: 2000, value: 255 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Portsmouth",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Portsmouth",
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
    { year: 2022, value: 25501 },
    { year: 2021, value: 17206 },
    { year: 2018, value: 33303 },
    { year: 2008, value: 37909 },
    { year: 1999, value: 39736 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Portsmouth",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const portsmouthData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
