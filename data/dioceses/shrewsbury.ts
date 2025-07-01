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
    { year: 2022, value: 76 },
    { year: 2021, value: 36 },
    { year: 2019, value: 90 },
    { year: 2010, value: 205 },
    { year: 2000, value: 152 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Shrewsbury",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Shrewsbury",
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
    { year: 2022, value: 17657 },
    { year: 2021, value: 14438 },
    { year: 2018, value: 26864 },
    { year: 2008, value: 33429 },
    { year: 1999, value: 42684 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Shrewsbury",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const shrewsburyData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
