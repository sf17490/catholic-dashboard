import { DioceseDb, DioceseDbKey } from "./dataTypes";
import { arundelAndBrightonData } from "./dioceses/arundel_and_brighton";
import { birminghamData } from "./dioceses/birmingham";
import { brentwoodData } from "./dioceses/brentwood";
import { cardiffMeneviaData } from "./dioceses/cardiff-menevia";
import { cliftonData } from "./dioceses/clifton";
import { eastAngliaData } from "./dioceses/east_anglia";
import { hallamData } from "./dioceses/hallam";
import { hexhamAndNewcastleData } from "./dioceses/hexham_and_newcastle";
import { southwarkData } from "./dioceses/southwark";
import { westminsterData } from "./dioceses/westminster";

export const DioceseSimpleDb: DioceseDb = {
  "Arundel & Brighton": arundelAndBrightonData,
  Birmingham: birminghamData,
  Brentwood: brentwoodData,
  "Cardiff-Menevia": cardiffMeneviaData,
  Clifton: cliftonData,
  "East Anglia": eastAngliaData,
  Hallam: hallamData,
  "Hexham & Newcastle": hexhamAndNewcastleData,
  Southwark: southwarkData,
  Westminster: westminsterData,
};

export function getDioceseData(keyName: DioceseDbKey) {
  return DioceseSimpleDb[keyName];
}
