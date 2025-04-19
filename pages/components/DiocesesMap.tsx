import { diocesesData } from "@/data/dioceseMapData";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const center: [number, number] = [53.04548200263121, -1.1891462992946762]; //Midlands

export default function DiocesesMap() {
  return (
    <div role={"mapSection"}>
      <h2 data-testid={"mapHeader"}>Dioceses Map</h2>
      <MapContainer
        center={center}
        zoom={5.5}
        style={{ width: "95vw", height: "400px" }}
      >
        {displayBaseMap()}
        {displayDiocesesLayer()}
      </MapContainer>
    </div>
  );
}

export function displayBaseMap() {
  return (
    <TileLayer
      url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=KEkSXTZni1ygdkq0Q875"
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />
  );
}

export function displayDiocesesLayer() {
  return (
    <div>
      {diocesesData.features.map((diocese) => {
        const coordinates = diocese.geometry.coordinates[0];
        const name = diocese.properties.name
        return makePolygon(name, coordinates);
      })}
    </div>
  );
}

function makePolygon(name: string, coordinates: LatLngExpression[]) {
  return (
    <Polygon
      key={name}
      pathOptions={{
        fillColor: "#FD8D3C",
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
        dashArray: [3],
        color: "white",
      }}
      positions={coordinates}
      // eventHandlers={{
      //   mouseover: (e) => {
      //     const layer = e.target;
      //     layer.setStyle({
      //       fillOpacity: 0.7,
      //       weight: 5,
      //       dashArray: "",
      //       color: "#667",
      //       fillColor: "#D45962",
      //     });
      //   },
      //   mouseout: (e) => {
      //     const layer = e.target;
      //     layer.setStyle({
      //       fillOpacity: 0.7,
      //       weight: 2,
      //       dashArray: "3",
      //       color: "white",
      //       fillColor: "#FD8D3C",
      //     });
      //   },
      // }}
    />
  );
}
