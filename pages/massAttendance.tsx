import React from "react";
import DataPage from "./components/dataPage";

const nationalMassAttendanceGraphData = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [1005522, 885169, 712909, 390236, 503008],
  xAxisLabel: "Year",
  xAxisValues: [1999, 2008, 2018, 2021, 2022],
};

const massAttendanceAccuracyComment =
  "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation.";

function MassAttendance() {
  return (
    <DataPage
      heading="Mass Attendance"
      accuracyComment={massAttendanceAccuracyComment}
      dataKey="nationalMassAttendance"
    />
  );
}

export default MassAttendance;
