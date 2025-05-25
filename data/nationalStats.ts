import { DbKey } from "./enums";

const nationalMassAttendance = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};

const nationalConversions = {
  yAxisLabel: "Converts to Catholicism",
  yAxisValues: [4402, 4615, 2674, 1537, 1976],
  xAxisLabel: "Year",
  xAxisValues: [2000, 2010, 2019, 2021, 2022],
};

export const SimpleDb = {
  nationalMassAttendance: nationalMassAttendance,
  nationalConversions: nationalConversions,
};

export function getData(keyName: DbKey) {
  return SimpleDb[keyName];
}
