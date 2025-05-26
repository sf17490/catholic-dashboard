import React from "react";
import MakeAComplexChart from "./MakeAComplexChart";

function MassAttendanceByDiocese() {
  return (
    <div data-testid="massAttendanceByDioceseSection">
        <h2 data-testid="DioceseMAHeader">Mass Attendance by Diocese</h2>
        <MakeAComplexChart />
    </div>
  );
}

export default MassAttendanceByDiocese;
