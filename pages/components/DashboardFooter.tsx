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
        </p>
      </div>
    </div>
  );
}
