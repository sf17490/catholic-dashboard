jest.mock("@/pages/components/MakeAChart", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-chart" />),
}));

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MassAttendance from "@/pages/massAttendance";
import { JSX } from "react";
import Conversions from "@/pages/conversions";

import { mocked } from "jest-mock";
import MakeAChart from "@/pages/components/MakeAChart";
import { LineGraphProps } from "@/pages/components/PlotALineGraph";
import {
  expectedNationalConversionsLineGraphProps,
  expectedNationalMassAttendanceLineGraphProps,
} from "@/templates/dataTemplates";
const mockedChart = mocked(MakeAChart, { shallow: false });

interface TopicPage {
  name: string;
  prettyName: string;
  expectedChartTitle: string;
  expectedChartSubheading: string;
  expectedLineGraphData: LineGraphProps;
  renderer: JSX.Element;
}
const topicPages: TopicPage[] = [
  {
    name: "massAttendance",
    prettyName: "Mass Attendance",
    expectedChartTitle: "Typical Sunday Mass Attendance",
    expectedChartSubheading:
      "Typical number of people attending Sunday Mass in England & Wales",
    expectedLineGraphData: expectedNationalMassAttendanceLineGraphProps,
    renderer: <MassAttendance />,
  },
  {
    name: "conversions",
    prettyName: "Conversions",
    expectedChartTitle: "Conversions to Catholicism in England & Wales",
    expectedChartSubheading:
      "Receptions into the Catholic Church in England & Wales",
    expectedLineGraphData: expectedNationalConversionsLineGraphProps,
    renderer: <Conversions />,
  },
];

topicPages.forEach((page) => {
  describe(`The ${page.prettyName} page`, () => {
    beforeEach(() => {
      render(page.renderer);
    });

    it("includes a header", () => {
      expect(screen.getByTestId("headerSection")).toBeInTheDocument();
    });

    it("includes a footer", () => {
      expect(screen.getByTestId("footing")).toBeInTheDocument();
    });

    it("has the correct title", () => {
      expect(screen.getByTestId(`${page.name}PageTitle`)).toHaveTextContent(
        page.prettyName
      );
    });

    describe(`The ${page.prettyName} chart`, () => {
      it("includes a section for the chart", async () => {
        const chartSection = await screen.findByTestId(`${page.name}Chart`);

        expect(chartSection).toBeInTheDocument();
      });

      const calls = mockedChart.mock.calls;
      it("gives the chart the correct title", () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.heading) ===
            JSON.stringify(page.expectedChartTitle)
        );

        expect(match).toBeTruthy();
      });

      it("gives the chart the correct subtitle", () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.contextParagraph) ===
            JSON.stringify(page.expectedChartSubheading)
        );

        expect(match).toBeTruthy();
      });

      it("gives the chart the correct line graph data", () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.lineGraphData) ===
            JSON.stringify(page.expectedLineGraphData)
        );

        expect(match).toBeTruthy();
      });
    });

    it("cites the Catholic Record Society", async () => {
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
