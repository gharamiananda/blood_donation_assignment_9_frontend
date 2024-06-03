'use client';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { isLoggedIn } from '@/services/auth.services';
import { TDonor } from '@/types/donor';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthProtected = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();
  

   const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)


   const [iseCLient,setIsClient]=useState(false);
   useEffect(()=>{
    setIsClient(true)
   },[])
if(!iseCLient || isFetching){
    return null
}
   if (!isLoggedIn() && profileData?.email) {
    return router.push('/login');
 }
   return <>{children} </>;
};

export default AuthProtected;
