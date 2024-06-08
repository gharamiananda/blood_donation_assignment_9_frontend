import { City, Country, State } from "country-state-city";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const StateCity:FC<{

    country:string, setCountry: Dispatch<SetStateAction<string>>,state:string, setState :Dispatch<SetStateAction<string>>,city:string, setCity :Dispatch<SetStateAction<string>>
}> = ({country, setCountry,state, setState ,city, setCity}) => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState<{
    countryCode
: string
isoCode
: string
latitude
: string
longitude
: string
name
: string
  }[]>([]);
  const [cityData, setCityData] = useState<{
    countryCode
: string
isoCode
: string
latitude
: string
longitude
: string
name
: string
  }[]>([]);




  // useEffect(() => {
  //   if(countryData?.length>0){

  //       setCountry(countryData[0]?.isoCode)
  //   }
  // }, [countryData]);
  useEffect(() => {
    setStateData(State.getStatesOfCountry(country) as any);
    setState('')
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country, state)  as any);
    setCity('')
  }, [state]);

//   useEffect(() => {
//     stateData && setState(stateData[0]?.name  as any);
//   }, [stateData]);

//   useEffect(() => {
//     cityData && setCity(cityData[0]?.name  as any);
//   }, [cityData]);


  console.log('state', state)
  return (
    <>
        <div className="col-md-6 mb-4">
<label className="fss-18">   Country  <span>*</span></label>


          <Form.Select   isInvalid={country?.length<1}  aria-label="Default select example"  value={country}  onChange={e=>setCountry(e.target.value)}>
      <option value={''}>Choose a country</option>
    { countryData?.map(it=><option key={it?.isoCode} value={it?.isoCode}>{it?.name}</option>) }
     
    </Form.Select>
    <Form.Control.Feedback type={!!country ? "valid":'invalid'}>
     This field is required
     </Form.Control.Feedback>
       </div>

       <div className="col-md-6 mb-4">
<label className="fss-18">  State   <span>*</span></label>


          <Form.Select isInvalid={state?.length<1}  value={state} aria-label="Default select example" onChange={e=>setState(e.target.value)}>
      <option value={''}>Choose a State</option>
    { stateData?.map(it=><option key={it?.isoCode} value={it?.isoCode}>{it?.name}</option>) }
     
    </Form.Select>
    <Form.Control.Feedback type={!!state ? "valid":'invalid'}>
     This field is required
     </Form.Control.Feedback>
       </div>

       <div className="col-md-6 mb-4">
<label className="fss-18">  City   <span>*</span></label>


<Form.Select isInvalid={city?.length<1}  aria-label="Default select example" value={city} onChange={e=>setCity(e.target.value)}>
<option value={''}>Choose a City</option>
{ cityData?.map(it=><option key={it?.name} value={it?.name}>{it?.name}</option>) }

</Form.Select>
<Form.Control.Feedback type={!!city ? "valid":'invalid'}>
     This field is required
      </Form.Control.Feedback>
</div> 
      
    </>
  );
};

export default StateCity;