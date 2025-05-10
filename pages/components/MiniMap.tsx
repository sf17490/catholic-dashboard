import { diocesesData } from "@/data/dioceseMapData";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import styles from "../../styles/MiniMap.module.scss";

const center: [number, number] = [53.04548200263121, -1.1891462992946762]; //Midlands

export default function MiniMap() {
  const [hoveredDiocese, setIsHoveredDiocese] = useState<string | null>(null);

  const handleDioceseNameMouseover = (name: string) => {
    setIsHoveredDiocese(name);
  };

  const handleDioceseNameMouseout = () => {
    setIsHoveredDiocese(null);
  };

  return (
    <div role={"mapSection"}>
      <h2
        data-testid={"miniMapHeader"}
        className={"govuk-heading-l govuk-!-margin-bottom-4"}
      >
        Dioceses
      </h2>
      <div role="miniMapContainer" className={styles.miniMapContainer}>
        <div role={"miniMapSection"} className={styles.horizontalLayout}>
          {displayListOfDioceses(
            handleDioceseNameMouseover,
            handleDioceseNameMouseout,
            hoveredDiocese
          )}
          <MapContainer
            center={center}
            zoom={5.5}
            style={{ width: "95vw", height: "400px" }}
          >
            {displayDiocesesLayer(hoveredDiocese)}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export function displayListOfDioceses(
  handleDioceseNameMouseover: (name: string) => void,
  handleDioceseNameMouseout: () => void,
  hoveredDiocese: string | null
) {
  return (
    <ul data-testid={"listOfDioceses"}>
      {diocesesData.features.map((diocese) => {
        const name = diocese.properties.name;
        return (
          <li
            key={diocese.properties.id}
            onMouseOver={() => handleDioceseNameMouseover(name)}
            onMouseOut={() => handleDioceseNameMouseout()}
            data-testid={`list-${name}`}
            className={hoveredDiocese == name ? styles.embold : styles.arial}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
}

export function displayDiocesesLayer(hoveredDiocese: string | null) {
  return (
    <div>
      {diocesesData.features.map((diocese) => {
        const coordinates = diocese.geometry.coordinates[0];
        const name = diocese.properties.name;
        const fillColour = setFillColour(hoveredDiocese, name);

        return makePolygon(name, coordinates, fillColour);
      })}
    </div>
  );
}

function setFillColour(hoveredDiocese: string | null, dioceseName: string) {
  let fillColour: string;
  switch (hoveredDiocese) {
    case dioceseName:
      fillColour = "#D45962";
      break;
    case null:
      fillColour = "#FD8D3C";
      break;
    default:
      fillColour = "#b5aea8";
  }
  return fillColour;
}

export function makePolygon(
  name: string,
  coordinates: LatLngExpression[],
  fillColour: string
) {
  return (
    <div data-testid={`polygon-${name}`}>
      <Polygon
        key={name}
        pathOptions={{
          fillColor: fillColour,
          fillOpacity: 0.7,
          weight: 2,
          opacity: 1,
          dashArray: [3],
          color: "white",
        }}
        positions={coordinates}
        //   eventHandlers={{
        //     mouseover: (e) => {
        //       const layer = e.target;
        //       if(isSouthwarkHovered){
        //         layer.setStyle({
        //             fillOpacity: 0.7,
        //             weight: 5,
        //             dashArray: "",
        //             color: "#667",
        //             fillColor: "#D45962",
        //           });
        //       }

        //     },
        //     mouseout: (e) => {
        //       const layer = e.target;
        //       layer.setStyle({
        //         fillOpacity: 0.7,
        //         weight: 2,
        //         dashArray: "3",
        //         color: "white",
        //         fillColor: "#FD8D3C",
        //       });
        //     },
        //   }}
      />
    </div>
  );
}
