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
    { year: 2022, value: 68 },
    { year: 2021, value: 68 },
    { year: 2019, value: 73 },
    { year: 2010, value: 153 },
    { year: 2000, value: 172 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Clifton",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Clifton",
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
    { year: 2022, value: 18898 },
    { year: 2021, value: 13698 },
    { year: 2018, value: 28460 },
    { year: 2008, value: 33264 },
    { year: 1999, value: 33456 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Clifton",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const cliftonData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
