import React from "react";
import DataPage from "./components/dataPage";

const conversionsAccuracyComment = ""

function Conversions() {
  return (
    <DataPage
      heading="Conversions"
      rootTestId="conversions"
      accuracyComment={conversionsAccuracyComment}
      dataKey="nationalConversions"
    />
  );
}

export default Conversions;
