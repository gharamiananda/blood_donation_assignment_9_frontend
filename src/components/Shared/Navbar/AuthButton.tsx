'use client'

import useUserInfo from '@/hooks/useUserInfo';
import { removeFromLocalStorage } from '@/utils/local-storage';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const AuthButton = () => {
    const userInfo = useUserInfo();
    const router=useRouter();
    const handleLogout=(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        removeFromLocalStorage('accessToken')
        router.replace('/login');

    }

  return (
    <>
    
  {userInfo?.email ?  <Link href="/login" onClick={handleLogout} className="red_btn get_code">Logout</Link>  :  <Link href="/login" className="red_btn get_code">Login</Link>}
    </>

  )
}

export default AuthButton