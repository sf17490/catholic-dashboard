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
    { year: 2022, value: 235 },
    { year: 2021, value: 163 },
    { year: 2019, value: 239 },
    { year: 2010, value: 592 },
    { year: 2000, value: 474 },
  ],
};

const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Birmingham",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Birmingham",
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
    { year: 2022, value: 37117 },
    { year: 2021, value: 30702 },
    { year: 2018, value: 57711 },
    { year: 2008, value: 76152 },
    { year: 1999, value: 82691 },
  ],
};

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Birmingham",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const birminghamData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
