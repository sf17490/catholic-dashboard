import React from "react";
import DashboardFooter from "../components/DashboardFooter";
import NavBar from "../components/NavBar";
import Link from "next/link";

function About() {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 data-testid="aboutPageTitle" className="govuk-heading-xl">
          About
        </h1>
        <p>Last updated 5 July 2025</p>
        <div>
          <h2 className="govuk-heading-l font-sans">
            {" "}
            What is the Catholic Data Dashboard?
          </h2>
          <p>
            The Catholic Data Dashboard is a dashboard measuring the Catholic
            Church's impact on England & Wales.
          </p>
          <p>
            In particular, it displays data and trends concerning the church's
            success in ministering the sacraments.{" "}
          </p>
          <p>It helps answer questions such as:</p>
          <ul className="govuk-list govuk-list--bullet">
            <li>How many people are attending Mass?</li>
            <li>How many people is the church converting each year?</li>
            <li>
              Is the Catholic Church growing or shrinking in England & Wales?{" "}
            </li>
          </ul>
          <p>
            It seeks to answer questions like these in an easy-to-understand
            way.
          </p>
        </div>
        <div>
          <h2 className="govuk-heading-l"> Who is the dashboard for?</h2>
          <p className="govuk-body">
            As a Catholic interested in spreading the Good News, I want to know
            which dioceses are better at converting people, so that I can learn
            from their approach.{" "}
          </p>
          <p>
            As a reader of newspaper reports about the Catholic Church, I want a
            comprehensive source of reliable statistics, so that I can put
            cherry-picked statistics into context.
          </p>
          <p>
            As a Catholic interested in the health of the Catholic Church, I
            want to know if the church is growing or shrinking, so that I can
            plan accordingly.{" "}
          </p>
        </div>
        <div>
          <h2 className="govuk-heading-l"> Where does the data come from?</h2>
          <p>
            All of the data used on this website is taken from{" "}
            <Link
              href="https://www.crs.org.uk/catholicism-in-numbers"
              className="govuk-link"
            >
              <i>Catholicism in Numbers</i>
            </Link>
            , a project by the Catholic Record Society, and in particular by
            Timothea Kinnear and Dr Alana Harris.{" "}
          </p>
          <p>
            The Catholic Data Dashboard is not affiliated with the Catholicism
            in Numbers project in any form.{" "}
          </p>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}

export default About;
