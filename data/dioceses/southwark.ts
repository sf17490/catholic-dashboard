import { DioceseData, TableData, TopicData } from "../dataTypes";
import { CONVERSIONS_ACCURACY_STATEMENT, MA_ACCURACY_STATEMENT } from "../strings";

const southwarkConversionsTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Converts to Catholicism",
  },
  rowData: [
    { year: 2022, value: 206 },
    { year: 2021, value: 132 },
    { year: 2019, value: 358 },
    { year: 2010, value: 451 },
    { year: 2000, value: 128 },
  ],
};

const southwarkConversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Southwark",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Southwark",
  },
  tableData: southwarkConversionsTable,
  accuracy: CONVERSIONS_ACCURACY_STATEMENT,
};

const southwarkMassAttendanceTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Number attending Mass",
  },
  rowData: [
    { year: 2022, value: 57360 },
    { year: 2021, value: 48188 },
    { year: 2018, value: 80178 },
    { year: 2008, value: 94217 },
    { year: 1999, value: 94467 },
  ],
};

const southwarkMassAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Southwark",
  },
  tableData: southwarkMassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const southwarkData: DioceseData= {
    massAttendance: southwarkMassAttendanceData,
    conversions: southwarkConversionsData
}