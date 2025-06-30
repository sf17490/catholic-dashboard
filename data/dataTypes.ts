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
  "Arundel_and_Brighton",
  "Birmingham",
  "Brentwood",
  "Cardiff-Menevia",
  "Clifton",
  "East_Anglia",
  "Hallam",
  "Hexham_and_Newcastle",
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
  "Arundel & Brighton": DioceseData;
  Birmingham: DioceseData;
  Brentwood: DioceseData;
  Clifton: DioceseData;
  Southwark: DioceseData;
  Westminster: DioceseData;
  //  [key in CleanedDioceseName]: DioceseData; //TODO: Implement for every diocese
};
