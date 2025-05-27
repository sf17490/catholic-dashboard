import Link from "next/link";
import React from "react";

function HomePageHeader() {
  return (
    <div data-testid="homePageHeader">
      <title>UK Catholic Dashboard</title>
      <div
        data-testid={"headerDiv"}
        className={"bg-[var(--colour-blue)] p-2.5"}
      >
        <div className="pl-1.5">
          <h1 role={"mainTitle"}>UK Catholic Data Dashboard</h1>
          <h2 role={"subheading"}>
            Showing Catholic data across England & Wales
          </h2>
          <Link
            data-testid="aboutLink"
            href="about"
          >
            <u className="pt-2.5 text-[var(--colour-offwhite)]">What is the Catholic Data Dashboard?</u>
          </Link>

          <p
            role={"betaNotice"}
            className={"pt-2.5 text-[var(--colour-offwhite)]"}
          >
            {" "}
            <strong className={"govuk-tag govuk-phase-banner__content__tag "}>
              Beta
            </strong>
            This is a new service - your feedback will help us to improve it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
