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
    { year: 2022, value: 146 },
    { year: 2021, value: 127 },
    { year: 2019, value: 230 },
    { year: 2010, value: 333 },
    { year: 2000, value: 354 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Hexham & Newcastle",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Hexham & Newcastle",
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
    { year: 2022, value: 17991 },
    { year: 2021, value: 13207 },
    { year: 2018, value: 30433 },
    { year: 2008, value: 38677 },
    { year: 1999, value: 58327 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Hexham & Newcastle",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const hexhamAndNewcastleData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
