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
    { year: 2022, value: 94 },
    { year: 2021, value: 96 },
    { year: 2019, value: 141 },
    { year: 2010, value: 184 },
    { year: 2000, value: 216 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Arundel & Brighton",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Arundel & Brighton",
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
    { year: 2022, value: 25789 },
    { year: 2021, value: 11739 },
    { year: 2018, value: 29471 },
    { year: 2008, value: 41469 },
    { year: 1999, value: 40509 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Arundel & Brighton",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const arundelAndBrightonData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
