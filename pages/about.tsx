import Link from "next/link";
import React from "react";

function About() {
  return (
    <div>
        <title>UK Catholic Dashboard</title>
      <header className="govuk-header border-none">
        <div className="relative">
          <div className="govuk-width-container relative flow-root">
            <div className="govuk-header__content govuk-!-padding-top-2 inline w-auto">
              <Link
              data-testid="homePageLink"
                href="/"
                className="govuk-header__link govuk-header__service-name"
              >
                Catholic Data Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>
      <h1>Hello. </h1>
      <p>About the Catholic Data Dashboard</p>
    </div>
  );
}

export default About;
