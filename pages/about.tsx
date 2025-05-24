import Link from "next/link";
import React from "react";
import DashboardFooter from "./components/DashboardFooter";
import NavBar from "./components/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 data-testid="aboutPageTitle" className="govuk-heading-xl">
          About
        </h1>
        <p>Last updated 24 May 2025</p>
        <div>
          <h2 className="govuk-heading-l"> What is the Catholic Data Dashboard?</h2>
          <p>
            The Catholic Data Dashboard is a dashboard measuring the Catholic
            Church's impact on England & Wales.
          </p>
          <p>
            In particular, it displays data and trends concerning the church's
            success in administering the sacraments.{" "}
          </p>
          <p>It helps answer questions such as:</p>
          <ul>
            <li>How many people are attending Mass?</li>
            <li>Which diocese is best at converting people?</li>
            <li>Is my diocese growing or shrinking? </li>
          </ul>
        </div>
        <div>
          <h2 className="govuk-heading-l"> Where does the Catholic Dashboard data come from?</h2>
          <p>The Catholic Directory for England & Wales, years 2000-2023.</p>
        </div>
        <div>
          <h2 className="govuk-heading-l"> Can I trust the data on the dashboard?</h2>
          <p>Not always. </p>
          <p>
            In every case the dashboard uses the best available data.
            Nonetheless, there are cases in which the best available data is
            inadequate.{" "}
          </p>
          <p>
            TODO: Further explanation of this. How can you justify publishing
            inadequate data?{" "}
          </p>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
}

export default About;
