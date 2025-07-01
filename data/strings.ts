import { CleanedDioceseName, DioceseName } from "./dataTypes";

export const CONVERSIONS_ACCURACY_STATEMENT =
  "The data below records receptions into the Catholic Church. It does not include figures for adult baptisms.";
export const MA_ACCURACY_STATEMENT =
  "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation.";

//Not actually strings but nowhere else to put it atm:
export const diocesesPlusRobotNames: [DioceseName, CleanedDioceseName][] = [
  ["Arundel & Brighton", "arundel_and_brighton"],
  ["Birmingham", "birmingham"],
  ["Brentwood", "brentwood"],
  ["Cardiff-Menevia", "cardiff-menevia"],
  ["Clifton", "clifton"],
  ["East Anglia", "east_anglia"],
  ["Hallam", "hallam"],
  ["Hexham & Newcastle", "hexham_and_newcastle"],
  ["Lancaster", "lancaster"],
  ["Leeds", "leeds"],
  ["Liverpool", "liverpool"],
  ["Middlesbrough", "middlesbrough"],
  ["Northampton", "northampton"],
  ["Nottingham", "nottingham"],
  ["Plymouth", "plymouth"],
  ["Portsmouth", "portsmouth"],
  ["Salford", "salford"],
  ["Shrewsbury", "shrewsbury"],
  ["Southwark", "southwark"],
  ["Westminster", "westminster"],
  ["Wrexham", "wrexham"],
];
