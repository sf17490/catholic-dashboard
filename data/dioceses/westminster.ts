import { DioceseData, TableData, TopicData } from "../dataTypes";
import { CONVERSIONS_ACCURACY_STATEMENT, MA_ACCURACY_STATEMENT } from "../strings";

const westminsterConversionsTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Converts to Catholicism",
  },
  rowData: [
    { year: 2022, value: 227 },
    { year: 2021, value: 193 },
    { year: 2019, value: 298 },
    { year: 2010, value: 628 },
    { year: 2000, value: 541 },
  ],
};

const westminsterConversionsData: TopicData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Westminster",
    subheading:
      "Receptions into the Catholic Church in the Diocese of Westminster",
  },
  tableData: westminsterConversionsTable,
  accuracy: CONVERSIONS_ACCURACY_STATEMENT,
};

const westminsterMassAttendanceTable: TableData = {
  columnHeadings: {
    keyColumn: "Year",
    valueColumn: "Number attending Mass",
  },
  rowData: [
    { year: 2022, value: 90202 },
    { year: 2021, value: 74308 },
    { year: 2018, value: 127340 },
    { year: 2008, value: 151668 },
    { year: 1999, value: 154042 },
  ],
};

export const westminsterMassAttendanceData: TopicData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    subheading:
      "Typical number of people attending Sunday Mass in the Diocese of Westminster",
  },
  tableData: westminsterMassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT,
};

export const westminsterData: DioceseData = {
    massAttendance: westminsterMassAttendanceData,
    conversions: westminsterConversionsData
}