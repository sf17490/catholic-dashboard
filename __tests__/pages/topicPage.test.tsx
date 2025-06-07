jest.mock("@/components/MakeAChart", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-chart" />),
}));
jest.mock("@/components/Table", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-table" />),
}));

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MassAttendance from "@/pages/massAttendance";
import { JSX } from "react";
import Conversions from "@/pages/conversions";

import { mocked } from "jest-mock";
import MakeAChart from "@/components/MakeAChart";
import { LineGraphProps } from "@/components/PlotALineGraph";
import {
  expectedNationalConversionsLineGraphProps,
  expectedNationalMassAttendanceLineGraphProps,
} from "@/templates/dataTemplates";
const mockedChart = mocked(MakeAChart, { shallow: false });

import Table from "@/components/Table";
const mockedTable = mocked(Table);

interface TopicPage {
  name: string;
  prettyName: string;
  expectedAccuracyStatement: string;
  expectedChartTitle: string;
  expectedChartSubheading: string;
  expectedLineGraphData: LineGraphProps;
  renderer: JSX.Element;
}
const topicPages: TopicPage[] = [
  {
    name: "massAttendance",
    prettyName: "Mass Attendance",
    expectedAccuracyStatement:
      "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation.",
    expectedChartTitle: "Typical Sunday Mass Attendance",
    expectedChartSubheading:
      "Typical number of people attending Sunday Mass in England & Wales",
    expectedLineGraphData: expectedNationalMassAttendanceLineGraphProps,
    renderer: <MassAttendance />,
  },
  {
    name: "conversions",
    prettyName: "Conversions",
    expectedAccuracyStatement: "",
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

    it("has a dataDisplayBox for the chart + table", () => {
      const dataDisplayBox = screen.getByTestId("dataDisplayBox");
      expect(dataDisplayBox).toBeInTheDocument();

      expect(dataDisplayBox).toHaveClass("bg-[var(--colour-grey-3)]");
    });

    it("gives the correct padding to the contents of the dataDisplayBox", () => {
      const dataDisplayBoxContents = screen.getByTestId(
        "dataDisplayBoxContents"
      );
      expect(dataDisplayBoxContents).toBeInTheDocument();

      expect(dataDisplayBoxContents).toHaveClass("m-6 pt-2 pb-0.25");
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

    describe(`The ${page.prettyName} table`, () => {
      it("inlcudes a section for the table", () => {
        const tableSection = screen.getByTestId("tableSection");
        expect(tableSection).toBeInTheDocument();
      });

      const calls = mockedTable.mock.calls;

      it(`gives the table's keyColumn the correct heading`, () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.columns.keyColumn) ===
            JSON.stringify(page.expectedLineGraphData.xAxisLabel)
        );
        expect(match).toBeTruthy();
      });

      it(`gives the table's valueColumn the correct heading`, () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.columns.valueColumn) ===
            JSON.stringify(page.expectedLineGraphData.yAxisLabel)
        );
        expect(match).toBeTruthy();
      });

      it(`gives the table's rows the correct keys`, () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.rows.map((row) => row.year)) ===
            JSON.stringify(page.expectedLineGraphData.xAxisValues)
        );
        expect(match).toBeTruthy();
      });

      it(`gives the table's rows the correct values`, () => {
        const match = calls.find(
          ([props]) =>
            JSON.stringify(props.rows.map((row) => row.value)) ===
            JSON.stringify(page.expectedLineGraphData.yAxisValues)
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

describe(`Unique stuff about the Mass attendance page`, () => {
  it("advises the viewer about the accuracy of the data", () => {
    render(<MassAttendance />);
    expect(screen.getByTestId("massAttendanceAccuracy")).toHaveTextContent(
      "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation."
    );
  });
});

describe(`Unique stuff about the Conversions page`, () => {
  it("should not include an accuracy statement", () => {
    render(<Conversions />);
    expect(screen.queryByTestId("conversionsAccuracy")).not.toBeInTheDocument();
  });
});
