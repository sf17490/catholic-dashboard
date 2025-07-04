import { TableColumns, TableRow } from "@/components/Table";
import { DioceseSimpleDb } from "./dioceseStats";
import { SimpleDb } from "./nationalStats";
export const validDioceseNames = [
  "Arundel & Brighton",
  "Birmingham",
  "Brentwood",
  "Cardiff-Menevia",
  "Clifton",
  "East Anglia",
  "Hallam",
  "Hexham & Newcastle",
  "Lancaster",
  "Leeds",
  "Liverpool",
  "Middlesbrough",
  "Northampton",
  "Nottingham",
  "Plymouth",
  "Portsmouth",
  "Salford",
  "Shrewsbury",
  "Southwark",
  "Westminster",
  "Wrexham",
] as const;
export type DioceseName = (typeof validDioceseNames)[number];

export const cleanedDioceseNames = [
  "arundel_and_brighton",
  "birmingham",
  "brentwood",
  "cardiff-menevia",
  "clifton",
  "east_anglia",
  "hallam",
  "hexham_and_newcastle",
  "lancaster",
  "leeds",
  "liverpool",
  "middlesbrough",
  "northampton",
  "nottingham",
  "plymouth",
  "portsmouth",
  "salford",
  "shrewsbury",
  "southwark",
  "westminster",
  "wrexham",
] as const;
export type CleanedDioceseName = (typeof cleanedDioceseNames)[number];

export type DbKey = keyof typeof SimpleDb;
export type DioceseDbKey = keyof typeof DioceseSimpleDb;

export type TableData = {
  columnHeadings: TableColumns;
  rowData: TableRow[];
};

export type TopicData = {
  context: {
    heading: string;
    subheading: string;
  };
  tableData: TableData;
  accuracy: string;
};

export type DioceseData = {
  massAttendance: TopicData;
  conversions: TopicData;
};

export type DioceseDb = {
  [key in DioceseName]: DioceseData;
};
