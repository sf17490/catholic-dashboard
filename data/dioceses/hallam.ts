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
    { year: 2022, value: 34 },
    { year: 2021, value: 34 },
    { year: 2019, value: 58 },
    { year: 2010, value: 95 },
    { year: 2000, value: 159 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Hallam",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Hallam",
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
    { year: 2022, value: 7636 },
    { year: 2021, value: 6242 },
    { year: 2018, value: 10163 },
    { year: 2008, value: 13404 },
    { year: 1999, value: 17648 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Hallam",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const hallamData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
