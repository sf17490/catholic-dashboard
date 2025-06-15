import React from "react";
import DashboardFooter from "../components/DashboardFooter";
import NavBar from "../components/NavBar";
import TopicSection from "@/components/TopicSection";
import { getDioceseData } from "@/data/dioceseStats";

export type DiocesePageProps = {
  rootTestId: string;
};

function WestminsterPage({ rootTestId }: DiocesePageProps) {
  const dioceseData = getDioceseData("westminster");
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
        <TopicSection
          rootTestId="westminsterConversions"
          topicName="Conversions"
          topicData={dioceseData.conversions}
        />
         <TopicSection
          rootTestId="westminsterMassAttendance"
          topicName="Mass Attendance"
          topicData={dioceseData.massAttendance}
        />
      </div>
      <DashboardFooter />
    </div>
  );
}

export default WestminsterPage;
