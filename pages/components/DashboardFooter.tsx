export default function DashboardFooter() {
  return (
    <div className="govuk-footer" data-testid="footing">
      <div data-testid="footingInfoContainer" className="ml-10">
        <p data-testid="credit">
          Inspired by the{" "}
          <a
            href="https://ukhsa-dashboard.data.gov.uk/"
            data-testid="UKHSAlink"
            className="govuk-footer__link"
          >
            UKHSA Dashboard.
          </a>
          {" "}  Styling reproduced under the  <a
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            data-testid="govLicenceLink"
            className="govuk-footer__link"
          >
             Open Government Licence v3.0
          </a>. 
          {" "} All our code is <a
            href="https://github.com/sf17490/catholic-dashboard"
            data-testid="catholicDashboardGithub"
            className="govuk-footer__link"
          >
             open-source
          </a>.  
        </p>
      </div>
    </div>
  );
}
