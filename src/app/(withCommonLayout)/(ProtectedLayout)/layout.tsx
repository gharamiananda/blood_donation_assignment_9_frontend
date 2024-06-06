'use client';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { isLoggedIn } from '@/services/auth.services';
import { TDonor } from '@/types/donor';
import { useRouter } from 'next/navigation';
import {  ReactNode, useEffect, useState } from 'react';

const ProtectedLayout= ({ children }:{ children: ReactNode }) => {
   const router = useRouter();
  

   const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)


   const [iseCLient,setIsClient]=useState(false);
   useEffect(()=>{
    setIsClient(true)
   },[])
if(!iseCLient || isFetching){
    return <p>Loading...</p>
}
   if (!isLoggedIn() || !profileData?.email) {
      return router.push('/login');
 }
   return children;
};

export default ProtectedLayout;
