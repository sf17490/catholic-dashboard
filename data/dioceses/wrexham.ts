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
    { year: 2022, value: 14 },
    { year: 2021, value: 15 },
    { year: 2019, value: 37 },
    { year: 2010, value: 37 },
    { year: 2000, value: 29 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Wrexham",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Wrexham",
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
    { year: 2022, value: 3702 },
    { year: 2021, value: 2602 },
    { year: 2018, value: 5142 },
    { year: 2008, value: 7600 },
    { year: 1999, value: 8638 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Wrexham",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const wrexhamData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
