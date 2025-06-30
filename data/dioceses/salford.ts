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
    { year: 2022, value: 129 },
    { year: 2021, value: 102 },
    { year: 2019, value: 163 },
    { year: 2010, value: 243 },
    { year: 2000, value: 242 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Salford",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Salford",
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
    { year: 2022, value: 24104 },
    { year: 2021, value: 19446 },
    { year: 2018, value: 37384 },
    { year: 2008, value: 54260 },
    { year: 1999, value: 69313 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Salford",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const salfordData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
