'use client';


import { useGetSingleUserQuery } from '@/redux/api/userApi'
import { TDonor } from '@/types/donor'
import Link from 'next/link'
import React from 'react'

const MyProfileBtn = () => {
   const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)

  return (
    profileData?.email ? <>
    <li><Link href="/profile">My Profile</Link></li> 
    
    
    </> :<></>

  )
}

export default MyProfileBtn