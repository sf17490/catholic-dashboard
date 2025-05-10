jest.mock("react-leaflet", () => ({
  MapContainer: jest.fn(() => null),
  Polygon: jest.fn(() => null),
}));

import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
} from "@testing-library/react";

import { displayDiocesesLayer } from "@/pages/components/DiocesesMap";
import { Polygon } from "react-leaflet";

import MiniMap from "@/pages/components/MiniMap";

import { diocesesData } from "@/data/dioceseMapData";

describe("Map section", () => {
  it("should render a map section", () => {
    render(<MiniMap />);

    const mapSection = screen.getByRole("mapSection");

    expect(mapSection).toBeInTheDocument();
  });
  it("should have the correct background colour", () => {
    render(<MiniMap />);
    const mapSection = screen.getByRole("miniMapDiv");
    expect(mapSection).toHaveClass("miniMapDiv");
  });
  it("should render a heading", () => {
    render(<MiniMap />);

    const heading = screen.getByTestId("miniMapHeader");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Dioceses");
    expect(heading).toHaveClass("govuk-heading-l govuk-!-margin-bottom-4");
  });

  it("should render a list of all 21 dioceses by name", () => {
    render(<MiniMap />);

    const listOfDioceses = screen.getByTestId("listedDioceses");

    expect(listOfDioceses).toBeInTheDocument();

    diocesesData.features.map((diocese) => {
      const dioceseNameTestId = screen.getByTestId(
        `list-${diocese.properties.name}`
      );
      expect(dioceseNameTestId).toBeInTheDocument();
    });
  });

  it("should list the dioceses alphabetically", () => {
    render(<MiniMap />);

    const listItems = screen
      .getAllByRole("listitem")
      .map((item) => item.textContent);

    const diocesesSortedAlphabetically = diocesesData.features
      .sort((a, b) => a.properties.name.localeCompare(b.properties.name))
      .map((diocese) => diocese.properties.name);

    expect(listItems).toEqual(diocesesSortedAlphabetically);
  });

  it("should give the diocese list enough width to stop bouncing the polygons", () => {
    render(<MiniMap />);

    const diocesesList = screen.getByTestId("listedDioceses");
    expect(diocesesList).toHaveStyle("width:195");
  });

  it("should render a pretty name for dioceses with spaces in their name", () => {
    render(<MiniMap />);

    const prettyNames: string[] = ["Arundel & Brighton", "Hexham & Newcastle"];

    prettyNames.forEach((name) => {
      const dioceseNameTestId = screen.getByTestId(`list-${name}`);
      expect(dioceseNameTestId).toBeInTheDocument();
      expect(dioceseNameTestId).toHaveTextContent(name);
    });
  });

  diocesesData.features.map((diocese) => {
    it(`should highlight the diocese name ${diocese.properties.name} only when I hover over it`, () => {
      render(<MiniMap />);

      const dioceseDisplayName = screen.getByText(diocese.properties.name);
      expect(dioceseDisplayName).toHaveClass("arial");
      fireEvent.mouseOver(dioceseDisplayName);
      expect(dioceseDisplayName).toHaveClass("embold");
      fireEvent.mouseOut(dioceseDisplayName);
      expect(dioceseDisplayName).toHaveClass("arial");
    });
  });

  //TODO: Implement this test.
  //May require snapshot testing (hopefully not though)
  test.todo(
    "should highlight the correct diocese polygon only when I hover over the diocese name"
  );
  test.todo(
    "should give the map container the same background colour as the section it's in"
    //Maybe mock the mapcontainer?
  );

  function diocesesLayerWrapper() {
    return displayDiocesesLayer();
  }

  it("should create polygons for all 21 dioceses", async () => {
    render(diocesesLayerWrapper());

    expect(Polygon).toHaveBeenCalledTimes(21);
  });
});
