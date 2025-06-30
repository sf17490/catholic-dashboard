import { DioceseDb, DioceseDbKey } from "./dataTypes";
import { arundelAndBrightonData } from "./dioceses/arundel_and_brighton";
import { birminghamData } from "./dioceses/birmingham";
import { brentwoodData } from "./dioceses/brentwood";
import { cliftonData } from "./dioceses/clifton";
import { eastAngliaData } from "./dioceses/east_anglia";
import { southwarkData } from "./dioceses/southwark";
import { westminsterData } from "./dioceses/westminster";

export const DioceseSimpleDb: DioceseDb = {
  "Arundel & Brighton": arundelAndBrightonData,
  Birmingham: birminghamData,
  Brentwood: brentwoodData,
  Clifton: cliftonData,
  "East Anglia": eastAngliaData,
  Southwark: southwarkData,
  Westminster: westminsterData,
};

export function getDioceseData(keyName: DioceseDbKey) {
  return DioceseSimpleDb[keyName];
}
