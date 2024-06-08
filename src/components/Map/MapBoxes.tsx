'use client'
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import { useEffect, useRef, useState } from "react";

function MapBoxes() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [pins, setPins] = useState([{
    id:1,
    lat:22.572645, 
    long:88.363892,
    title:'',
    username:'dsfdsf'

  }]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [viewport, setViewport] = useState({
    latitude:22.572645, 
    longitude: 88.363892,
    zoom: 8,
  });
  
console.log('pins', pins)

  console.log('lnnewPlaceg', newPlace)

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    // try {
    //   const res = await axios.post("/pins", newPin);
    //   setPins([...pins, res.data]);
    //   setNewPlace(null);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        // const allPins = await axios.get("/pins");
        // setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const mapRef = useRef();

  const TOKEN='pk.eyJ1IjoiYW5hbmRhZ2hhcmFtaTEyMyIsImEiOiJjbHg1aWp5YmMwNDN2MnFyMHBjbm81cDFxIn0.Y7MnpnI-Wx8K3YPmkwXrwQ';

  return (
    <div >
      <ReactMapGL
      // ref={mapRef}
      {...viewport}
      mapboxAccessToken={TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
   
        
        // onDblClick={currentUsername && handleAddClick}
      >

<Marker longitude={-100} latitude={40} anchor="bottom" >
    <div className="bg-info">
    map pin
      </div> 
    </Marker>
        
        {pins.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
              
            >
              <div
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:
                    currentUsername === p.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  {/* <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<Star className="star" />)}
                  </div> */}
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.username}</b>
                  </span>
                  {/* <span className="date">{format(p.createdAt)}</span> */}
                </div>
              </Popup>
            )}
          </>
        ))}
      <NavigationControl position="bottom-right"/>
      
       
      </ReactMapGL>
    </div>
  );
}

export default MapBoxes;
