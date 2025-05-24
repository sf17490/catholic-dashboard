import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div>
      <title>UK Catholic Dashboard</title>
      <header className="govuk-header border-none" data-testid="headerSection">
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


    </div>
  );
}

export default NavBar;
