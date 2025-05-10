jest.mock("react-leaflet", () => ({
    MapContainer: jest.fn(() => null),
    TileLayer: jest.fn(() => null),
    Polygon: jest.fn(() => null),
  }));

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { displayBaseMap, displayDiocesesLayer } from "@/pages/components/DiocesesMap";
import { TileLayer, Polygon, MapContainer } from "react-leaflet";



import HoverMap from "@/pages/components/HoverMap";
import { diocesesData } from "@/data/dioceseMapData";

describe("Map section", () => {
  it("should render a map section", () => {
    render(<HoverMap />);

    const mapSection = screen.getByRole("mapSection");

    expect(mapSection).toBeInTheDocument();
  });
  it("should render a heading", () => {
    render(<HoverMap />);

    const heading = screen.getByTestId("hoverMapHeader");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("CHANGEME Map");
  });

  it("should render a list of all 21 dioceses by name", () => {
    render(<HoverMap />);

    const listOfDioceses = screen.getByTestId("listOfDioceses");

    expect(listOfDioceses).toBeInTheDocument();

    diocesesData.features.map((diocese)=> {
        const dioceseNameTestId = screen.getByTestId(`list-${diocese.properties.name}`)
        expect(dioceseNameTestId).toBeInTheDocument()
    })
  });

  it("should render a pretty name for dioceses with spaces in their name", () => {
    render(<HoverMap />)

    const prettyNames:string[] = ["Arundel & Brighton", "Hexham & Newcastle"]

    prettyNames.forEach(name => {
        const dioceseNameTestId = screen.getByTestId(`list-${name}`)
        expect(dioceseNameTestId).toBeInTheDocument()
        expect(dioceseNameTestId).toHaveTextContent(name)
    })


  })


  function diocesesLayerWrapper(){
    return displayDiocesesLayer()
  }

  it("should create polygons for all 21 dioceses", async () =>{
    render(diocesesLayerWrapper())

    expect(Polygon).toHaveBeenCalledTimes(21)

  })
});
