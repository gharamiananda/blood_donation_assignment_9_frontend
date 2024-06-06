
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { TDonor } from '@/types/donor';
import { removeFromLocalStorage } from '@/utils/local-storage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Dispatch, FC, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const SidebarCanvus :FC<{show:boolean, setShow: Dispatch<React.SetStateAction<boolean>>}>= ({show, setShow}) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)

   const router=useRouter();
   const handleLogout=(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
       removeFromLocalStorage('accessToken')
       router.replace('/login');

   }

  return (
    <>
        
     
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
        <div className="mobile-menu">
                <a href="index.html" className="logo py-3">
                <h6 className='red_color'>
           Ag Blood Center   
              </h6>   </a>
                <button type="button" className="btn-close"  onClick={handleClose} />
                <ul className="accordion accordion-flush mobile_dropdown" id="accordionFlushExample">
              


                  <li   className="accordion-item"> <h2> <Link href="/">Home</Link>  </h2></li>
            <li   className="accordion-item"> <h2> <Link href="/about">About Us</Link> </h2></li>
            <li   className="accordion-item"> <h2> <Link href="/donor-list">Donor list</Link></h2></li>
  
            <li   className="accordion-item"> <h2> <Link href="/contact">contact Us</Link> </h2></li>

            {profileData?.email && 
            <>
    <li    className="accordion-item"> <h2><Link href="/profile">My Profile</Link></h2></li> 

     <Link href="/login" onClick={handleLogout} className="red_btn get_code mt-3">Logout</Link>  

    
    </>}

   { !profileData?.email &&  <Link href="/login" className="red_btn get_code">Login</Link>}
                </ul>
              </div>


     
        </Offcanvas.Body>
      </Offcanvas>

    
    </>
  )
}

export default SidebarCanvus