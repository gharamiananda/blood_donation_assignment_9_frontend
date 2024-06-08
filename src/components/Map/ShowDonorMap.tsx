
"use client"

import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

import mapImg from '../../assets/images/google-maps.png'
import { Tooltip } from 'react-bootstrap';
import TooltipCustom from './TooltipCustom';
import { useGetAllDonorsQuery } from '@/redux/api/donorApi';

// Sample user data
const users = [
  { id: 1, name: 'User 1', latitude: 37.78, longitude: -122.41, details: 'Some details about User 1' },
  { id: 2, name: 'User 2', latitude: 37.79, longitude: -122.42, details: 'Some details about User 2' },
  // Add more users as needed
];


const MAPBOX_TOKEN='pk.eyJ1IjoiYW5hbmRhZ2hhcmFtaTEyMyIsImEiOiJjbHg1aWp5YmMwNDN2MnFyMHBjbm81cDFxIn0.Y7MnpnI-Wx8K3YPmkwXrwQ';

const DonorMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 12,
    width: '100vw',
    height: '100vh'
  });




  const { data: donorList,isLoading: isFetching,isError,error } = useGetAllDonorsQuery({ queryParams: { page: 1, limit: 100} } );

    const [selectedUser, setSelectedUser] = useState(null);

  console.log('donorList', donorList)


  const [isMount,setIsMount]=useState(false);

  useEffect(()=>{
    setIsMount(true)
  },[])

  if(isFetching || !isMount){
    return <p>Loading....</p>
  }

  return (
   <div style={{
    height:'400px'
   }}>
   <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"

      mapboxAccessToken={MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {donorList?.data?.map(user => (
        <Marker
        
        
        key={user?._id} latitude={user?.latitude ||   37.78} longitude={user?.longitude ||  -122.41}>
          <button className="marker-btn" onClick={(e) => {
            e.preventDefault();
            setSelectedUser(user);
          }}>
            {/* <Tooltip>
              sdsadsadsa
            <Image
            width={60}
            height={60}
            src={mapImg} alt="Pin Icon" />
            </Tooltip> */}
            <TooltipCustom  showInfo={user} />
          </button>
        </Marker>
      ))}

    
    </ReactMapGL>
   </div>
  );
};

export default DonorMap;
