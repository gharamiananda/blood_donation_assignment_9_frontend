// "use server";

import { FieldValues } from 'react-hook-form';

export const userLogin = async (data: FieldValues) => {
let userInfo={}
   try {
      
   
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor-list`,
      {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
         // cache: "no-store",
      }
   );
    userInfo = await res.json();

   // const passwordChangeRequired = userInfo.data.needPasswordChange;

   // if (userInfo.data.accessToken) {
   //    setAccessToken(userInfo.data.accessToken, {
   //       redirect: '/dashboard',
   //       passwordChangeRequired,
   //    });
   // }

} catch (error) {
      
}
   return userInfo;
};
