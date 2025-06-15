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
export type DioceseDbKey = keyof typeof DioceseSimpleDb