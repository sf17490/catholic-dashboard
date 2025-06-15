import { DioceseDbKey } from "./enums";
import { TableData } from "./nationalStats"; //TODO: Organise typing

const MA_ACCURACY_STATEMENT =
  "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation.";
  const CONVERSIONS_ACCURACY_STATEMENT = "The data below records receptions into the Catholic Church. It does not include figures for adult baptisms.";

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

const westminsterConversionsData = {
  context: {
    heading: "Conversions to Catholicism in the Diocese of Westminster",
    contextParagraph:
      "Receptions into the Catholic Church in the Diocese of Westminster",
  },
  data: westminsterConversionsTable,
  accuracy: CONVERSIONS_ACCURACY_STATEMENT
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

const westminsterMassAttendanceData = {
  context: {
    heading: "Typical Sunday Mass Attendance",
    contextParagraph:
      "Typical number of people attending Sunday Mass in the Diocese of Westminster",
  },
  data: westminsterMassAttendanceTable,
  accuracy: MA_ACCURACY_STATEMENT
};

export const DioceseSimpleDb = {
  westminsterMassAttendance: westminsterMassAttendanceData,
  westminsterConversions: westminsterConversionsData,
};

export function getDioceseData(keyName: DioceseDbKey) {
  return DioceseSimpleDb[keyName];
}
