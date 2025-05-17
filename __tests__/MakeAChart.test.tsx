jest.mock("@/pages/components/PlotALineGraph", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-plot" />),
}));

import { mocked } from "jest-mock";
import PlotALineGraph from "@/pages/components/PlotALineGraph";
const mockedPlot = mocked(PlotALineGraph, { shallow: false });

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MakeAChart, { ChartProps } from "@/pages/components/MakeAChart";

beforeAll(() => {
  global.URL.createObjectURL = jest.fn(() => "mock-url");
});

const dummyLineGraphProps = {
  yAxisLabel: "Number attending Mass",
  yAxisValues: [
    31943, 29429, 29848, 28989, 30233, 30460, 28866, 10030, 17475, 23226, 26032,
  ],
  xAxisLabel: "Year",
  xAxisValues: [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ]
};

const dummyChartProps: ChartProps = {
  heading: "My Cool Heading",
  contextParagraph: "The context of being cool",
  lineGraphData: dummyLineGraphProps,
};

const dummyChart = (
  <MakeAChart
    heading={dummyChartProps.heading}
    contextParagraph={dummyChartProps.contextParagraph}
    lineGraphData={dummyChartProps.lineGraphData}
  />
);

describe("Make a chart", () => {
  it("sets the heading correctly", () => {
    render(dummyChart);
    const heading = screen.getByRole("contextHeader");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("My Cool Heading");
    expect(heading).toHaveClass("govuk-heading-m mb-1")
  });
  it("has the correct context paragraph", () => {
    render(dummyChart);

    const contextParagraph = screen.getByRole("contextParagraph");

    expect(contextParagraph).toBeInTheDocument();
    expect(contextParagraph).toHaveTextContent("The context of being cool");
  });
  it("has a graph", async () => {
    render(dummyChart);

    const graph = await screen.findByRole("graph");

    expect(graph).toBeInTheDocument();
  });

  type GraphVariable = {
    name: string;
    expectedValue: any;
    getter: (props: any) => any;
  };

  const graphVariables: GraphVariable[] = [
    {
      name: "y-axis label",
      expectedValue: "Number attending Mass",
      getter: (props) => props.yAxisLabel,
    },
    {
      name: "x-axis label",
      expectedValue: "Year",
      getter: (props) => props.xAxisLabel,
    },
    {
      name: "y-axis values",
      expectedValue: [
        31943, 29429, 29848, 28989, 30233, 30460, 28866, 10030, 17475, 23226,
        26032,
      ],
      getter: (props) => props.yAxisValues,
    },
    {
      name: "x-axis values",
      expectedValue: [
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
      ],
      getter: (props) => props.xAxisValues,
    }
  ];

  graphVariables.forEach((variable) =>
    it(`gives the graph the correct ${variable.name}`, () => {
      render(dummyChart);

      const calls = mockedPlot.mock.calls;
      const match = calls.find(
        ([props]) =>
          JSON.stringify(variable.getter(props)) ===
          JSON.stringify(variable.expectedValue)
      );

      expect(match).toBeTruthy();
    })
  );
});
