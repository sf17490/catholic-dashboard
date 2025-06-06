import React from "react";
import DataPage from "../components/dataPage";

const conversionsAccuracyComment = "";

function Conversions() {
  return (
    <div>
    <DataPage
      heading="Conversions"
      rootTestId="conversions"
      accuracyComment={conversionsAccuracyComment}
      dataKey="nationalConversions"
    />
    </div>
  );
}

export default Conversions;
