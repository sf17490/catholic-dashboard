// jest.mock("react-leaflet", () => ({
//   MapContainer: jest.fn(() => null),
//   TileLayer: jest.fn(() => null),
//   Polygon: jest.fn(() => null),
// }));

// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";

// import {
//   displayBaseMap,
//   displayDiocesesLayer,
// } from "@/pages/components/maps/DiocesesMap";
// import { TileLayer, Polygon } from "react-leaflet";

// import DiocesesMap from "@/pages/components/maps/DiocesesMap";

// describe("Map section", () => {
//   it("should render a map section", () => {
//     render(<DiocesesMap />);

//     const mapSection = screen.getByRole("mapSection");

//     expect(mapSection).toBeInTheDocument();
//   });
//   it("should render a heading", () => {
//     render(<DiocesesMap />);

//     const heading = screen.getByTestId("mapHeader");

//     expect(heading).toBeInTheDocument();
//     expect(heading).toHaveTextContent("Dioceses Map");
//   });

//   function baseMapWrapper() {
//     return displayBaseMap();
//   }

//   it("should display the open street base map with copyright notice", async () => {
//     const expectedCopyright =
//       '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>';
//     const expectedBaseMapUrl =
//       "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=KEkSXTZni1ygdkq0Q875";

//     render(baseMapWrapper());
//     expect(TileLayer).toHaveBeenCalledWith(
//       expect.objectContaining({
//         attribution: expectedCopyright,
//         url: expectedBaseMapUrl,
//       }),
//       undefined //undefined because we're not building the full DOM here
//     );
//   });

//   function diocesesLayerWrapper() {
//     return displayDiocesesLayer();
//   }

//   it("should create polygons for all 21 dioceses", async () => {
//     render(diocesesLayerWrapper());

//     expect(Polygon).toHaveBeenCalledTimes(21);
//   });
// });
