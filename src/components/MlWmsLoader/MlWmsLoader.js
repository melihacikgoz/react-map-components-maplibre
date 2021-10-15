import React, { useRef, useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";

import { MapContext } from "react-map-components-core";
import { v4 as uuidv4 } from "uuid";

import MlWmsLayer from "../MlWmsLayer/MlWmsLayer";
import WMSCapabilities from "wms-capabilities";

const MlWmsLoader = (props) => {
  // Use a useRef hook to reference the layer object to be able to access it later inside useEffect hooks
  const mapContext = useContext(MapContext);

  const initializedRef = useRef(false);
  const mapRef = useRef(undefined);
  const componentId = useRef(
    (props.idPrefix ? props.idPrefix : "MlWmsLoader-") + uuidv4()
  );
  const [capabilities, setCapabilities] = useState(undefined);
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    let _componentId = componentId.current;
    console.log(props);

    return () => {
      // This is the cleanup function, it is called when this react component is removed from react-dom
      // try to remove anything this component has added to the MapLibre-gl instance
      // e.g.: remove the layer
      // mapContext.getMap(props.mapId).removeLayer(layerRef.current);
      // check for the existence of map.style before calling getLayer or getSource

      if (mapRef.current) {
        mapRef.current.cleanup(_componentId);
        mapRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    let urlParamsObj = {
      ...props.urlParameters,
    };
    let urlParams = new URLSearchParams(urlParamsObj);
    let urlParamsStr =
      decodeURIComponent(urlParams.toString()) +
      "".replace(/%2F/g, "/").replace(/%3A/g, ":");

    fetch(props.url + "?" + urlParamsStr)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.text();
      })
      .then((data) => {
        setCapabilities(new WMSCapabilities(data).toJSON());
      })
      .catch((msg) => {
        console.log("error");
        console.log(msg);
      });
  }, [props.url]);

  useEffect(() => {
    if (!capabilities) return;

    console.log(capabilities);
    if (capabilities?.Capability?.Layer?.SRS.indexOf("EPSG:3857") === -1) {
      console.log(
        "MlWmsLoader (" +
          capabilities.Service.Title +
          "): No WGS 84/Pseudo-Mercator support"
      );
    } else {
      console.log(
        "MlWmsLoader (" +
          capabilities.Service.Title +
          "): WGS 84/Pseudo-Mercator supported"
      );
      setLayers(capabilities?.Capability?.Layer?.Layer);
    }
  }, [capabilities]);

  useEffect(() => {
    if (!mapContext.mapExists(props.mapId) || initializedRef.current) return;
    // the MapLibre-gl instance (mapContext.map) is accessible here
    // initialize the layer and add it to the MapLibre-gl instance or do something else with it
    initializedRef.current = true;
    mapRef.current = mapContext.getMap(props.mapId);
  }, [mapContext.mapIds, mapContext, props.mapId]);

  return (
    <>
      {layers.map?.((layer) => {
        return <MlWmsLayer url={props.url} urlParameters={{ layers: layer.Name }} />;
      })}
    </>
  );
};

MlWmsLoader.defaultProps = {
  urlParameters: {
    service: "WMS",
    version: "1.1.3",
    request: "getCapabilities",
  },
};

MlWmsLoader.propTypes = {
  /**
   * WMS URL
   */
  url: PropTypes.string.isRequired,
  /**
   * Id of the target MapLibre instance in mapContext
   */
  mapId: PropTypes.string,
  urlParameters: PropTypes.object,
};

export default MlWmsLoader;
