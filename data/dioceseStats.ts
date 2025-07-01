import { DioceseDb, DioceseDbKey } from "./dataTypes";
import { arundelAndBrightonData } from "./dioceses/arundel_and_brighton";
import { birminghamData } from "./dioceses/birmingham";
import { brentwoodData } from "./dioceses/brentwood";
import { cardiffMeneviaData } from "./dioceses/cardiff-menevia";
import { cliftonData } from "./dioceses/clifton";
import { eastAngliaData } from "./dioceses/east_anglia";
import { hallamData } from "./dioceses/hallam";
import { hexhamAndNewcastleData } from "./dioceses/hexham_and_newcastle";
import { lancasterData } from "./dioceses/lancaster";
import { leedsData } from "./dioceses/leeds";
import { liverpoolData } from "./dioceses/liverpool";
import { middlesbroughData } from "./dioceses/middlesborough";
import { northamptonData } from "./dioceses/northampton";
import { nottinghamData } from "./dioceses/nottingham";
import { plymouthData } from "./dioceses/plymouth";
import { portsmouthData } from "./dioceses/portsmouth";
import { salfordData } from "./dioceses/salford";
import { shrewsburyData } from "./dioceses/shrewsbury";
import { southwarkData } from "./dioceses/southwark";
import { westminsterData } from "./dioceses/westminster";
import { wrexhamData } from "./dioceses/wrexham";

export const DioceseSimpleDb: DioceseDb = {
  "Arundel & Brighton": arundelAndBrightonData,
  Birmingham: birminghamData,
  Brentwood: brentwoodData,
  "Cardiff-Menevia": cardiffMeneviaData,
  Clifton: cliftonData,
  "East Anglia": eastAngliaData,
  Hallam: hallamData,
  "Hexham & Newcastle": hexhamAndNewcastleData,
  Lancaster: lancasterData,
  Leeds: leedsData,
  Liverpool: liverpoolData,
  Middlesbrough: middlesbroughData,
  Northampton: northamptonData,
  Nottingham: nottinghamData,
  Plymouth: plymouthData,
  Portsmouth: portsmouthData,
  Salford: salfordData,
  Shrewsbury: shrewsburyData,
  Southwark: southwarkData,
  Westminster: westminsterData,
  Wrexham: wrexhamData
};

export function getDioceseData(keyName: DioceseDbKey) {
  return DioceseSimpleDb[keyName];
}
