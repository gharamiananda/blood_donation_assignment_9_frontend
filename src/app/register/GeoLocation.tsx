import React from 'react'
import { GoogleMap, useJsApiLoader , Autocomplete} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GeoLocation() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDXSkLOXJOURvaAZUWr9q0dgDmL7mOIhNw",
    libraries:['places']
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>

    <Autocomplete >
<input type="text" />
        </Autocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
          </>
  ) : <p>Loading map</p>
}

export default React.memo(GeoLocation)