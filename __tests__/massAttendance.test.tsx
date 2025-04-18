jest.mock("@/pages/components/PlotALineGraph", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-plot" />),
}));

import { mocked } from "jest-mock";
import PlotALineGraph from "@/pages/components/PlotALineGraph";
const mockedPlot = mocked(PlotALineGraph, { shallow: false });

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MassAttendance from "@/pages/components/MassAttendance";

beforeAll(() => {
  global.URL.createObjectURL = jest.fn(() => "mock-url");
});

describe("Mass Attendance section", () => {
  it("has the correct heading", () => {
    render(<MassAttendance />);

    const heading = screen.getByRole("heading2");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Mass Attendance");
  });

  it("has a graph", async () => {
    render(<MassAttendance />);

    const graph = await screen.findByRole("graph");

    expect(graph).toBeInTheDocument();
  });

  it("has a paragraph providing context to the graph", () => {
    render(<MassAttendance />);

    const contextParagraph = screen.getByRole("contextParagraph");

    expect(contextParagraph).toBeInTheDocument();
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
        26032
      ],
      getter: (props) => props.yAxisValues,
    },
    {
        name: "x-axis values",
        expectedValue: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        getter: (props) => props.xAxisValues,
      }
  ];

  graphVariables.forEach((variable) =>
    it(`gives the graph the correct ${variable.name}`, () => {
      render(<MassAttendance />);

      const calls = mockedPlot.mock.calls;
      const match = calls.find(
        ([props]) => JSON.stringify(variable.getter(props)) === JSON.stringify(variable.expectedValue)
      );

      expect(match).toBeTruthy();
    })
  );
});
