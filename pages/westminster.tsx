import React from "react";
import DashboardFooter from "../components/DashboardFooter";
import NavBar from "../components/NavBar";
import { DioceseDbKey } from "@/data/enums";
import { getDioceseData } from "@/data/dioceseStats";
import DataDisplayBox from "@/components/DataDisplayBox";

export type DiocesePageProps = {
  rootTestId: string;
};

function WestminsterPage({ rootTestId }: DiocesePageProps) {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 data-testid={`${rootTestId}PageTitle`} className="govuk-heading-xl">
          Diocese of Westminster
        </h1>
        <div data-testid="citation">
          <b>Citation</b>
          <p data-testid="citationText">
            The data on this page comes from{" "}
            <i>
              <a
                data-testid="citationLink"
                className="govuk-link"
                href="https://www.crs.org.uk/catholicism-in-numbers"
              >
                Catholicism in Numbers
              </a>
            </i>
            , a project by the Catholic Record Society.
          </p>
        </div>
        {topicSection(
          "Conversions",
          "westminsterConversions",
          "westminsterConversions"
        )}

        {topicSection(
          "Mass Attendance",
          "westminsterMassAttendance",
          "westminsterMassAttendance"
        )}
      </div>
      <DashboardFooter />
    </div>
  );
}

export default WestminsterPage;

function topicSection(
  topicName: string,
  dioceseTopicKey: DioceseDbKey,
  rootTestId: string
) {
  const accuracyStatement = getDioceseData(dioceseTopicKey).accuracy;
  return (
    <div>
      <h2 className="govuk-heading-l">{topicName}</h2>
      <strong>Note on accuracy of data</strong>
      <p>{accuracyStatement}</p>
      <DataDisplayBox
        {...{ rootTestId: rootTestId, dioceseDataKey: dioceseTopicKey }}
      />
    </div>
  );
}
