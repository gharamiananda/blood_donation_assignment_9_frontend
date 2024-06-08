'use client'

import React, { useRef, useState } from "react";

import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl";

// -26.475393195281754, 153.04416685709924

const DonorMap = () => {


    const blueShade = "#0080ff";

    let initial = {
      latitude: 22.572645,
      longitude: 88.363892,
      zoom: 9,
      pitch: 0,
      antialias: true,
      lat: 22.572645,
      lng: 88.363892,
    };
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [layerColor, setLayerColor] = useState(blueShade);
    const [count, setCount] = useState(100);
    const [newPlace, setNewPlace] = useState(initial);
    const [polygonCord, setPolygonCord] = useState([]);
    let area = 250;
    const [viewport, setViewport] = useState(initial);
  
    const mapRef = useRef();
  
    // ** Vars
    const leftSidebarWidth = 260;
  
    const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen);



  const handleAddClick = (e) => {
    setNewPlace({
      lat: e?.lngLat?.lat,
      lng: e?.lngLat?.lng,
    });
  };
  const geojson = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [polygonCord],
    },
  };

  const layerStyle = {
    id: "maine",
    type: "fill",
    source: "maine", // reference the data source
    layout: {},
    paint: {
      "fill-color": layerColor || "#0080ff", // blue color fill
      "fill-opacity": 0.5,
    },
  };
  // Add a black outline around the polygon.
  const layerOutlineStyle = {
    id: "outline",
    type: "line",
    source: "maine",
    layout: {},
    paint: {
      "line-color": "#000",
      "line-width": 3,
    },
  };

  const TOKEN='pk.eyJ1IjoiYW5hbmRhZ2hhcmFtaTEyMyIsImEiOiJjbHg1aWp5YmMwNDN2MnFyMHBjbm81cDFxIn0.Y7MnpnI-Wx8K3YPmkwXrwQ';

  return (
    <>
{/* 
<iframe width="100%" height="400px" src="https://api.mapbox.com/styles/v1/anandagharami123/clx5j4arq01o201pc31mj2hd2.html?title=false&access_token=pk.eyJ1IjoiYW5hbmRhZ2hhcmFtaTEyMyIsImEiOiJjbHg1aWp5YmMwNDN2MnFyMHBjbm81cDFxIn0.Y7MnpnI-Wx8K3YPmkwXrwQ&zoomwheel=false#2/37.75/-92.25" title="Streets" style={{border: 'none'}} /> */}

<div className="py-5">


    <ReactMapGL
      ref={mapRef}
      mapboxAccessToken={TOKEN}
      initialViewState={viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/anandagharami123/clx5j4arq01o201pc31mj2hd2"
      onDblClick={handleAddClick}
      transitionDuration="200"
      attributionControl={true}

      style={{
          height:'500px'
          }}
          
          
          >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerOutlineStyle} />
        <Layer {...layerStyle} />
      </Source>

   
        <Marker
          latitude={newPlace?.lat}
          longitude={newPlace?.lng}
          draggable
          onDragEnd={(e) =>
            setNewPlace({ lng: e.lngLat.lng, lat: e.lngLat.lat })
            }
            />
      <NavigationControl position="bottom-right"/>
    </ReactMapGL>
            </div>
    </>
  );
};

export default DonorMap;