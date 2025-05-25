import React from "react";
import DataPage from "./components/dataPage";

const conversionsAccuracyComment = "A comment about conversions accuracy."

function Conversions() {
  return (
    <DataPage
      heading="Conversions"
      accuracyComment={conversionsAccuracyComment}
      dataKey="nationalConversions"
    />
  );
}

export default Conversions;
