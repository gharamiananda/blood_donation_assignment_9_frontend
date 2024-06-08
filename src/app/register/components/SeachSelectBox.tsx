


import React, { FC, useState } from 'react';

import AsyncSelect from 'react-select/async';



const promiseOptions = (inputValue: string) =>
  new Promise<any[]>((resolve) => {
   
     fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${inputValue}&proximity=ip&access_token=pk.eyJ1IjoiYW5hbmRhZ2hhcmFtaTEyMyIsImEiOiJjbHg1aWp5YmMwNDN2MnFyMHBjbm81cDFxIn0.Y7MnpnI-Wx8K3YPmkwXrwQ`)
     .then(res=>res.json())
     .then(res=>{



         resolve(res?.features?.map((it:any)=>({...it,label:it?.properties?.full_address,value:`${it?.properties?.coordinates?.latitude}-${it?.properties?.coordinates?.longitude}` })));
     })


  });

  const SearchSelectBox:FC<{opValue:any,setOpValue: React.Dispatch<React.SetStateAction<{}>>}>=({opValue,setOpValue}) => {

    return(
      <>
  <label className="fss-18">   Address </label>
      
      <AsyncSelect
      isClearable
      closeMenuOnSelect
      onChange={e=>{
     
        setOpValue(e)
      }}
      cacheOptions defaultOptions loadOptions={promiseOptions} />
      </>
        )
  };
    export default  SearchSelectBox
