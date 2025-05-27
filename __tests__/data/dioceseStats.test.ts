import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getPlotLineData } from "@/data/dioceseStats";

describe("Diocese Stats helper functions", () => {
  it("returns the correct plot line data for a diocese when plotting its mass attendance", () => {
    const result = getPlotLineData("Birmingham");

    const expectedMassAttendanceData = {
        yAxisLabel: "Number attending Mass",
        yAxisValues: [82691, 76152, 57711, 30702, 37117],
        xAxisLabel: "Year",
        xAxisValues: [1999, 2008, 2018, 2021, 2022],
        markerColour: "green",
    };

    expect(result).toEqual(expectedMassAttendanceData)
  });
});
