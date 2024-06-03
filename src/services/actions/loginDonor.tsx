// "use server";

import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import {  FieldValues } from "react-hook-form";

export const loginDonor = async (data: FieldValues) => {

  // axiosBaseQuery({
  //   baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
  //   method:'GET'

  // })
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
     }
    );
  
    
    const patientInfo = await res.json();
    return patientInfo;
  };
  