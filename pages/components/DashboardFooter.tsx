export default function DashboardFooter() {
  return (
    <div className={"govuk-footer"} data-testid={"footing"}>
      <div className={"govuk-width-container"}>
        <div className={"govuk-footer__meta"}>
          <div
            className={"govuk-footer__meta-item govuk-footer__meta-item--grow"}
          >
            <p data-testid={"credit"}>
              Inspired by the{" "}
              <a
                href={"https://ukhsa-dashboard.data.gov.uk/"}
                data-testid={"UKHSAlink"}
                className="govuk-footer__link"
              >
                UKHSA Dashboard.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
