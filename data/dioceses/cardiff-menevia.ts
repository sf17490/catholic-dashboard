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
    //NOTE: Cardiff and Menevia were two separate dioceses until 12 September 2024.
    //The below values are a simple addition of their data. 
    { year: 2022, value: 49 },
    { year: 2021, value: 57 },
    { year: 2019, value: 80 },
    { year: 2010, value: 146 },
    { year: 2000, value: 178 },
  ],
};

//Total converts:
// Year / Cardiff / Menevia / Total
//2022: 38 + 11 = 49
//2021: 41 + 16 = 57
//2019: 56 + 24 = 80
//2010: 100 + 46 = 146
//2000: 101 + 77 = 178


const conversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Cardiff-Menevia",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Cardiff-Menevia",
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
    //NOTE: Cardiff and Menevia were two separate dioceses until 12 September 2024.
    //The below values are a simple addition of their data
    { year: 2022, value: 13038 },
    { year: 2021, value: 10473 },
    { year: 2018, value: 18292 },
    { year: 2008, value: 24603 },
    { year: 1999, value: 32146 },
  ],
};

//Total Mass attendance: 
// Year / Cardiff / Menevia / Total
//2022: 8,395 + 4,643 = 13038
//2021: 6,773 + 3,700 = 10473
//2018: 12,322 + 5,970 = 18292
//2008: 17,376 + 7,227 = 24603
//1999: 22,669 + 9,477 = 32146

const massAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Cardiff-Menevia",
  },
  tableData: MassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const cardiffMeneviaData: DioceseData = {
  massAttendance: massAttendanceData,
  conversions: conversionsData,
};
