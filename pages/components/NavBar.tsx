import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div>
      <title>UK Catholic Dashboard</title>
      <header className="govuk-header" data-testid="headerSection">
        <div data-testid="homePageLinkContainer" className="ml-10">
          <Link
            data-testid="homePageLink"
            href="/"
            className="govuk-header__link govuk-header__service-name"
          >
            Catholic Data Dashboard
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
