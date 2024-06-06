'use client'


import { useGetMYProfileQuery } from '@/redux/api/myProfile';
import Link from 'next/link'
import React from 'react'

const ViewDetailsBtn = ({url}:{url:string}) => {
    const { data, isLoading } = useGetMYProfileQuery(undefined);

  return (
             <Link    href={data?.email  ?   url:'/login'} className="red_btn get_code mt-3 w-100 ">View Details</Link> 

  )
}

export default ViewDetailsBtn