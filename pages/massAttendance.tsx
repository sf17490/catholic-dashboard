import React from "react";
import DataPage from "./components/dataPage";

const massAttendanceAccuracyComment =
  "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation.";

function MassAttendance() {
  return (
    <DataPage
      heading="Mass Attendance"
      rootTestId="massAttendance"
      accuracyComment={massAttendanceAccuracyComment}
      dataKey="nationalMassAttendance"
    />
  );
}

export default MassAttendance;
