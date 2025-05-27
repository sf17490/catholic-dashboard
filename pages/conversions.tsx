import React from "react";
import DataPage from "./components/dataPage";
import DashboardFooter from "./components/DashboardFooter";

const conversionsAccuracyComment = "A comment about conversions accuracy.";

function Conversions() {
  return (
    <div>
      <DataPage
        heading="Conversions"
        accuracyComment={conversionsAccuracyComment}
        dataKey="nationalConversions"
      />
      <DashboardFooter />
    </div>
  );
}

export default Conversions;
