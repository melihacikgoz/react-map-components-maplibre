import React, { useState, useEffect, useContext, useRef } from "react";
import "./MlMapDrawTools.css";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import CustomPolygonMode from "./custom-polygon-mode";
import CustomSelectMode from "./custom-select-mode";
import CustomDirectSelectMode from "./custom-direct-select-mode";

import { MapContext } from "react-map-components-core";

import Nav from "react-bootstrap/Nav";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function MlMapDrawTools() {
  const draw = useRef(null);
  const mapContext = useContext(MapContext);

  const [firstLoad, setFirstLoad] = useState(true);
  const [mouseUpTrigger, setMouseUpTrigger] = useState(false);

  //const [groupCloseVertices, setGroupCloseVertices] = useState(false);

  const [storedMapFeatures, setStoredMapFeatures] = useState(null);

  const [drawnFeatures, setDrawnFeatures] = useState([]);
  const [drawModeActive, setDrawModeActive] = useState(false);
  const [currentDrawMode, setCurrentDrawMode] = useState("custom_select");
  const [selectedFeatureId, setSelectedFeatureId] = useState("");

  useEffect(() => {
    // retrieve stored features from localstorage
    let storedMapFeaturesStr = localStorage.getItem("storedMapFeatures");

    if (storedMapFeaturesStr) {
      let storedMapFeaturesObj = JSON.parse(storedMapFeaturesStr);
      setStoredMapFeatures(storedMapFeaturesObj);
      setDrawnFeatures(storedMapFeaturesObj.features);
    }
  }, []);

  useEffect(() => {
    if (mapContext.map && firstLoad) {
      setFirstLoad(false);
      if (
        mapContext.map.getSource("mapbox-gl-draw-cold") &&
        window.MapboxDraw &&
        typeof window.MapboxDraw.remove !== "undefined"
      ) {
        // remove old Mapbox-gl-Draw from Mapbox instance when hot-reloading this component during development
        window.MapboxDraw.remove();
      }
      window.MapLibreObj = mapContext.map;

      draw.current = new MapboxDraw({
        displayControlsDefault: false,
        defaultMode: "custom_select",
        modes: Object.assign(
          {
            custom_polygon: CustomPolygonMode,
            custom_select: CustomSelectMode,
            custom_direct_select: CustomDirectSelectMode,
          },
          MapboxDraw.modes
        ),
      });

      mapContext.map.on("draw.modechange", (e) => {
        console.log("modechange");
        setCurrentDrawMode(e.mode);
      });

      window.MapboxDraw = draw.current;

      // sadly there is no featureAdd event available in MapLibre
      mapContext.map.addControl(draw.current, "top-left");

      mapContext.map.on("mouseup", () => {
        setMouseUpTrigger(Math.random());
      });

      if (storedMapFeatures) {
        draw.current.set(storedMapFeatures);
      }
    }
  }, [mapContext.map, drawnFeatures, firstLoad]);

  useEffect(() => {
    if (draw.current) {
      // update drawnFeatures state object
      let currentFeatureCollection = draw.current.getAll();
      if (
        currentDrawMode === "custom_polygon" ||
        currentDrawMode === "custom_select"
      ) {
        setDrawnFeatures([...currentFeatureCollection.features]);

        localStorage.setItem(
          "storedMapFeatures",
          JSON.stringify(currentFeatureCollection)
        );
      }

      // update selected feature
      let selectedFeature = draw.current.getSelected();
      for (var i = 0; i < drawnFeatures.length; i++) {
        if (
          typeof selectedFeature.features[0] !== "undefined" &&
          selectedFeature.features[0].id === drawnFeatures[i].id
        ) {
          setSelectedFeatureId(selectedFeature.features[0].id);
        }
      }
    }
  }, [mouseUpTrigger]);

  useEffect(() => {
    if (draw.current) {
      switch (currentDrawMode) {
        case "custom_polygon":
          draw.current.changeMode("custom_polygon");
          break;
        case "custom_select":
        default:
          draw.current.changeMode("custom_select");
          break;
      }
    }
  }, [currentDrawMode]);

  return (
    <>
      <Nav.Item as="li" key={1}>
        <Button
          variant={drawModeActive ? "warning" : "light"}
          onClick={() => setDrawModeActive(!drawModeActive)}
        >
          Draw
        </Button>
      </Nav.Item>
      {drawModeActive && (
        <>
          <Nav.Item as="li" key={2}>
            <Button
              variant={
                currentDrawMode === "custom_select" ||
                currentDrawMode === "custom_direct_select"
                  ? "warning"
                  : "light"
              }
              onClick={() => setCurrentDrawMode("custom_select")}
            >
              Select
            </Button>
          </Nav.Item>
          <Nav.Item as="li" key={4}>
            <Button
              variant="light"
              onClick={() => {
                localStorage.setItem("storedMapFeatures", "");
                setStoredMapFeatures(null);
                setDrawnFeatures([]);
                draw.current.deleteAll();
              }}
            >
              Clear
            </Button>
          </Nav.Item>
          <Nav.Item as="li" key={3}>
            <Button
              variant={
                currentDrawMode === "custom_polygon" ? "warning" : "light"
              }
              onClick={() =>
                setCurrentDrawMode(
                  currentDrawMode !== "custom_polygon"
                    ? "custom_polygon"
                    : "custom_select"
                )
              }
            >
              Polygon
            </Button>
          </Nav.Item>
          <div
            style={{
              position: "absolute",
              left: "17px",
              top: "60px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
              width: "150px",
              height: "200px",
            }}
          >
            <ListGroup>
              {drawnFeatures.map((feature, id) => (
                <ListGroup.Item
                  key={id}
                  active={selectedFeatureId === feature.id}
                >
                  {feature.type} {id}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </>
      )}
    </>
  );
}

export default MlMapDrawTools;
