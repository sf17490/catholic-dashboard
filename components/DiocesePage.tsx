import React from "react";
import TopicSection from "@/components/TopicSection";
import { getDioceseData } from "@/data/dioceseStats";
import { DioceseDbKey } from "@/data/dataTypes";

export type DiocesePageProps = {
  diocese: DioceseDbKey;
};

function DiocesePage({ diocese }: DiocesePageProps) {
  const dioceseData = getDioceseData(diocese);
  return (
    <div className="m-10">
      <h1 data-testid={`${diocese}PageTitle`} className="govuk-heading-xl">
        Diocese of {diocese}
      </h1>
      <div data-testId="maybeDioceseNote">
      {diocese == "Cardiff-Menevia" ? (
        <div>
          <b data-testId="dioceseNoteHeader">Note on Diocese Data</b>
          <p data-testId="dioceseNote">
            The Diocese of Cardiff-Menevia was formed on 12 September 2024 when
            Pope Francis merged the Archdiocese of Cardiff with the Diocese of
            Menevia. Data prior to this date has been calculated by adding the
            statistics from Cardiff to the statistics from Menevia. Separate
            data for each diocese can be found in the Catholicism In Numbers
            project by the Catholic Record Society.
          </p>
        </div>
      ) : (
        ""
      )}
      </div>
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
      <TopicSection
        rootTestId={`${diocese}Conversions`}
        topicName="Conversions"
        topicData={dioceseData.conversions}
      />
      <TopicSection
        rootTestId={`${diocese}MassAttendance`}
        topicName="Mass Attendance"
        topicData={dioceseData.massAttendance}
      />
    </div>
  );
}

export default DiocesePage;
