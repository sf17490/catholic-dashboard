jest.mock("@/pages/components/PlotMultipleLinesGraph", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-plot" />),
}));

import { mocked } from "jest-mock";
import PlotMultipleLinesGraph from "@/pages/components/PlotMultipleLinesGraph";
const mockedPlot = mocked(PlotMultipleLinesGraph, { shallow: false });

import MakeAComplexChart from "@/pages/components/MakeAComplexChart";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SimpleDioceseDb } from "@/data/dioceseStats";

describe("Make a complex Chart", () => {
  //Actual rendering of the chart (including passing the correct props) may need to be tested in PlotMultipleLinesGraph because it's dynamic
  it("has a place to put the chart", () => {
    render(<MakeAComplexChart/>);

    expect(screen.getByTestId("complexChartContainer")).toBeInTheDocument();
  });

  type GraphVariable = {
    name: string;
    expectedContextAndLineData: any;
    getDioceseData: (props: any) => any;
  };

  const graphVariables: GraphVariable[] = [
    {
      name: "y-axis label",
      expectedContextAndLineData: "Number attending Mass",
      getDioceseData: (props) => props.yAxisLabel,
    },
    {
      name: "x-axis label",
      expectedContextAndLineData: "Year",
      getDioceseData: (props) => props.xAxisLabel,
    },
  ];

  graphVariables.forEach((variable) =>
    it(`gives the graph the correct ${variable.name}`, () => {
      render(<MakeAComplexChart />);

      const calls = mockedPlot.mock.calls;
      const match = calls.find(
        ([props]) =>
          JSON.stringify(variable.getDioceseData(props)) ===
          JSON.stringify(variable.expectedContextAndLineData)
      );

      expect(match).toBeTruthy();
    })
  );

  const expectedBirminghamData = SimpleDioceseDb.diocesesData.Birmingham;

  const birminghamMassAttendanceLine: GraphVariable = {
    name: "Birmingham",
    expectedContextAndLineData: SimpleDioceseDb.diocesesData.Birmingham,
    getDioceseData: (props) => props.data.Birmingham,
  };

  //TODO: Rewrite this so that it's independent of the db. Make a template for this data. Same for Birmingham
  const expectedBrightonData =
    SimpleDioceseDb.diocesesData.Arundel_and_Brighton;

  const brightonMassAttendanceLine: GraphVariable = {
    name: "Arundel_and_Brighton",
    expectedContextAndLineData: expectedBrightonData,
    getDioceseData: (props) => props.data.Arundel_and_Brighton,
  };

  const dioceseGraphLinesWithContext = [
    birminghamMassAttendanceLine,
    brightonMassAttendanceLine,
  ];

  dioceseGraphLinesWithContext.forEach((dioceseLineWithContext) => {
    it(`gives the correct ${dioceseLineWithContext.name} data to the graph`, () => {
      render(<MakeAComplexChart />);

      const calls = mockedPlot.mock.calls;

      const match = calls.find(
        ([props]) => dioceseLineWithContext.getDioceseData(props) !== undefined
      );

      expect(match).toBeTruthy();

      const [matchedProps] = match!;

      expect(dioceseLineWithContext.getDioceseData(matchedProps)).toEqual(
        dioceseLineWithContext.expectedContextAndLineData
      );
    });
  });

  //Also test that it doesn't give any extra data that shouldn't be there (e.g. non-existent diocese)
  it("gives the correct birmingham data to the graph", () => {
    render(<MakeAComplexChart />);

    const calls = mockedPlot.mock.calls;

    const match = calls.find(
      ([props]) =>
        birminghamMassAttendanceLine.getDioceseData(props) !== undefined
    );

    expect(match).toBeTruthy();

    const [matchedProps] = match!;

    expect(birminghamMassAttendanceLine.getDioceseData(matchedProps)).toEqual(
      expectedBirminghamData
    );
  });
});
