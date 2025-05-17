import { diocesesData } from "@/data/dioceseMapData";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import styles from "../../styles/MiniMap.module.scss";

const center: [number, number] = [53.04548200263121, -1.1891462992946762]; //Midlands

export default function MiniMap() {
  const [hoveredDiocese, setIsHoveredDiocese] = useState<string | null>(null);

  const handleDioceseMouseover = (name: string) => {
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
      <div role="miniMapDiv" className={styles.miniMapDiv}>
        <div role={"miniMapSection"} className={styles.horizontalLayout}>
          {displayListOfDioceses(
            handleDioceseMouseover,
            handleDioceseNameMouseout,
            hoveredDiocese
          )}
          <MapContainer
            center={center}
            zoom={5.5}
            style={{ width: "70%", height: "460px" }}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            dragging={false}
            className={styles.miniMapContainer}
          >
            {displayDiocesesLayer(
              hoveredDiocese,
              handleDioceseMouseover,
              handleDioceseNameMouseout
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export function displayListOfDioceses(
  handleDioceseMouseover: (name: string) => void,
  handleDioceseNameMouseout: () => void,
  hoveredDiocese: string | null
) {
  const diocesesListedAlphabetically = diocesesData.features.sort((a, b) =>
    a.properties.name.localeCompare(b.properties.name)
  );
  return (
    <div data-testId={"needsMinWidth"}style={{minWidth:220}}>
      <ul data-testid={"listedDioceses"} className={styles.dioceseList}>
        {diocesesListedAlphabetically.map((diocese) => {
          const name = diocese.properties.name;
          const textStyling = setTextStyle(hoveredDiocese, name);
          return (
            <li
              key={diocese.properties.id}
              onMouseOver={() => handleDioceseMouseover(name)}
              onMouseOut={() => handleDioceseNameMouseout()}
              data-testid={`list-${name}`}
              className={textStyling}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function setTextStyle(hoveredDiocese: string | null, dioceseName: string) {
  let className: string;
  switch (hoveredDiocese) {
    case dioceseName:
      className = styles.embold;
      break;
    case null:
      className = styles.arial;
      break;
    default:
      className = styles.shadow;
  }
  return className;
}

export function displayDiocesesLayer(
  hoveredDiocese: string | null,
  handleDioceseMouseover: (name: string) => void,
  handleDioceseMouseout: (name: string) => void
) {
  return (
    <div>
      {diocesesData.features.map((diocese) => {
        const coordinates = diocese.geometry.coordinates[0];
        const name = diocese.properties.name;
        const fillColour = setFillColour(hoveredDiocese, name);

        return makePolygon(
          name,
          coordinates,
          fillColour,
          handleDioceseMouseover,
          handleDioceseMouseout
        );
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
  fillColour: string,
  handleDioceseMouseover: (name: string) => void,
  handleDioceseMouseout: (name: string) => void
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
        eventHandlers={{
          mouseover: () => {
            handleDioceseMouseover(name);
          },
          mouseout: () => {
            handleDioceseMouseout(name);
          },
        }}
      />
    </div>
  );
}
