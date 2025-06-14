import React from "react";
import DataPage from "../components/dataPage";

const conversionsAccuracyComment = "The data below records receptions into the church. It does not include figures for adult baptisms (which were 2,841 in 2021 and 3,958 in 2022).";

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
