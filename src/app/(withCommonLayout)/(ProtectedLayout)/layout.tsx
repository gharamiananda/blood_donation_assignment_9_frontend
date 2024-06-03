'use client';
import DashboardDrawer from '@/components/Dashboard/DashboardDrawer/DashboardDrawer';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { isLoggedIn } from '@/services/auth.services';
import { TDonor } from '@/types/donor';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

const ProtectedLayout:FC<{ children: ReactNode }> = ({ children }) => {
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
    return <p>ddd</p>
 }
   return children;
};

export default ProtectedLayout;
