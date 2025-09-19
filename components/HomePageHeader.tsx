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
          <h1 role={"mainTitle"}>UK Catholic Statistics Dashboard</h1>
          <h2 role={"subheading"}>
            Showing Catholic statistics across England & Wales
          </h2>
          <Link data-testid="aboutLink" href="about">
            <u className="pt-2.5 text-[var(--colour-offwhite)]">
              What is the Catholic Statistics Dashboard?
            </u>
          </Link>

          <p
            role={"betaNotice"}
            className={"pt-2.5 text-[var(--colour-offwhite)]"}
            style={{ color: "#c1d7eb" }}
          >
            {" "}
            <strong className={"govuk-tag govuk-phase-banner__content__tag "}>
              Beta
            </strong>
            This is a new service - your{"  "}
            <Link
              data-testid="feedbackLink"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdK9GoQLa-18A_AefB5UUpIf5_mHaqXgnd6IhEktuLrOO3eXg/viewform"
            >
              <u className="pt-2.5 text-[var(--colour-offwhite)]">feedback</u>{" "}
            </Link>
            will help us to improve it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageHeader;
