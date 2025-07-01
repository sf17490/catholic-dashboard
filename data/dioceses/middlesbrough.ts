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
    { year: 2022, value: 46 },
    { year: 2021, value: 38 },
    { year: 2019, value: 47 },
    { year: 2010, value: 85 },
    { year: 2000, value: 122 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Middlesbrough",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Middlesbrough",
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
    { year: 2022, value: 8039 },
    { year: 2021, value: 6765 },
    { year: 2018, value: 13158 },
    { year: 2008, value: 16473 },
    { year: 1999, value: 22371 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Middlesbrough",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const middlesbroughData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
