jest.mock("@/components/MakeAChart", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-chart" />),
}));
jest.mock("@/components/Table", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-table" />),
}));

import DataDisplayBox, { DisplayBoxProps } from "@/components/DataDisplayBox";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import MakeAChart from "@/components/MakeAChart";
const mockedChart = mocked(MakeAChart, { shallow: false });
import Table from "@/components/Table";
const mockedTable = mocked(Table);

const dummyProps: DisplayBoxProps = {
  rootTestId: "blah",
  dioceseDataKey: "westminsterMassAttendance",
};

describe("Data display box", () => {
  it("has a box", () => {
    render(<DataDisplayBox {...dummyProps} />);
    const box = screen.getByTestId("blahDataDisplayBox");
    expect(box).toBeInTheDocument();
    expect(box).toHaveClass("bg-[var(--colour-grey-3)]");
  });
  it("gives the contents of the box the correct padding", () => {
    render(<DataDisplayBox {...dummyProps} />);
    const contents = screen.getByTestId("blahDataDisplayBoxContents");
    expect(contents).toBeInTheDocument();
    expect(contents).toHaveClass("m-6 pt-2 pb-0.25");
  });
  it("has a chart", () => {
    render(<DataDisplayBox {...dummyProps} />);
    const chart = screen.getByTestId("blahChartSection");
    expect(chart).toBeInTheDocument();
  });

  it("gives the chart the correct props", async () => {
    render(<DataDisplayBox {...dummyProps} />);

    const expectedChartData = {
      heading: "Typical Sunday Mass Attendance",
      contextParagraph:
        "Typical number of people attending Sunday Mass in the Diocese of Westminster",
      lineGraphData: {
        xAxisLabel: "Year",
        yAxisLabel: "Number attending Mass",
        xAxisValues: [2022, 2021, 2018, 2008, 1999],
        yAxisValues: [90202, 74308, 127340, 151668, 154042],
      },
    };

    const calls = mockedChart.mock.calls;
    const match = calls.find(
      ([props]) => JSON.stringify(props) === JSON.stringify(expectedChartData)
    );

    expect(match).toBeTruthy();
  });

  it("has a table", () => {
    render(<DataDisplayBox {...dummyProps} />);
    const table = screen.getByTestId("blahTableSection");
    expect(table).toBeInTheDocument();
  });

  it("gives the table the correct props", () => {
    render(<DataDisplayBox {...dummyProps} />);

    const expectedTableData = {
      columns: { keyColumn: "Year", valueColumn: "Number attending Mass" },
      rows: [
        { year: 2022, value: 90202 },
        { year: 2021, value: 74308 },
        { year: 2018, value: 127340 },
        { year: 2008, value: 151668 },
        { year: 1999, value: 154042 },
      ],
    };

    const calls = mockedTable.mock.calls;
    const match = calls.find(
      ([props]) => JSON.stringify(props) === JSON.stringify(expectedTableData)
    );

    expect(match).toBeTruthy();
  });
});
