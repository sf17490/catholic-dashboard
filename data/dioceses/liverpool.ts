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
    { year: 2022, value: 137 },
    { year: 2021, value: 56 },
    { year: 2019, value: 140 },
    { year: 2010, value: 216 },
    { year: 2000, value: 198 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Liverpool",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Liverpool",
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
    { year: 2022, value: 25207 },
    { year: 2021, value: 19314 },
    { year: 2018, value: 43265 },
    { year: 2008, value: 57857 },
    { year: 1999, value: 82737 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Liverpool",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const liverpoolData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
