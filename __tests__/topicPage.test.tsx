import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MassAttendance from "@/pages/massAttendance";
import { JSX } from "react";
import Conversions from "@/pages/conversions";

type TopicPage = [
  pageName: string,
  prettyPageName: string,
  pageRenderer: JSX.Element
];
const topicPages: TopicPage[] = [
  ["massAttendance", "Mass Attendance", <MassAttendance />],
  ["conversions", "Conversions", <Conversions />],
];

topicPages.forEach((page) => {
  const [pageName, prettyPageName, pageRenderer] = page;

  describe(`The ${prettyPageName} page`, () => {
    it("includes a header", () => {
      render(pageRenderer);
      expect(screen.getByTestId("headerSection")).toBeInTheDocument();
    });

    it("includes a footer", () => {
      render(pageRenderer);
      expect(screen.getByTestId("footing")).toBeInTheDocument();
    });

    it("has the correct title", () => {
      render(pageRenderer);
      expect(screen.getByTestId(`${pageName}PageTitle`)).toHaveTextContent(
        prettyPageName
      );
    });

    it("includes the correct chart for this topic", async () => {
      render(pageRenderer);

      const chartSection = await screen.findByTestId(
        `${pageName}Chart`
      );

      expect(chartSection).toBeInTheDocument();
    });

    it("cites the Catholic Record Society", async () => {
      render(pageRenderer);

      expect(screen.getByTestId("citation")).toBeInTheDocument();
      expect(screen.getByTestId("citationText")).toHaveTextContent(
        "The data on this page comes from Catholicism in Numbers, a project by the Catholic Record Society."
      );
      const citationLink = screen.getByTestId("citationLink");
      expect(citationLink).toHaveAttribute(
        "href",
        "https://www.crs.org.uk/catholicism-in-numbers"
      );
      expect(citationLink).toHaveClass("govuk-link");
    });
  });
});
