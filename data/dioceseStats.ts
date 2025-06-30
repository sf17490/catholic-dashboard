import { DioceseDb, DioceseDbKey } from "./dataTypes";
import { southwarkData } from "./dioceses/southwark";
import { westminsterData } from "./dioceses/westminster";

export const DioceseSimpleDb: DioceseDb = {
  //"Arundel & Brighton" : southwarkData,
  Southwark: southwarkData,
  Westminster: westminsterData,
};

export function getDioceseData(keyName: DioceseDbKey) {
  return DioceseSimpleDb[keyName];
}
