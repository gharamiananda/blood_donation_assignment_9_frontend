'use client'

import useUserInfo from '@/hooks/useUserInfo';
import { useGetMYProfileQuery } from '@/redux/api/myProfile';
import { removeFromLocalStorage } from '@/utils/local-storage';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const AuthButton = () => {
  const { data, isLoading } = useGetMYProfileQuery(undefined);

    const router=useRouter();
    const handleLogout=(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        removeFromLocalStorage('accessToken')
        router.replace('/login');

    }

    console.log('data', data)
  return (
    <>
    
  {data?.email ?  <Link href="/login" onClick={handleLogout} className="red_btn get_code">Logout</Link>  :  <Link href="/login" className="red_btn get_code">Login</Link>}
    </>

  )
}

export default AuthButton