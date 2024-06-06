
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { TDonor } from '@/types/donor';
import Image from 'next/image';
import Link from 'next/link';
import React, { Dispatch, FC, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const SidebarCanvus :FC<{show:boolean, setShow: Dispatch<React.SetStateAction<boolean>>}>= ({show, setShow}) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const { data:profileData, isFetching } = useGetSingleUserQuery<{ data: TDonor, isFetching: boolean }>(undefined)

    
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
    <li    className="accordion-item"> <h2><Link href="/profile">My Profile</Link></h2></li> }
                </ul>
              </div>


     
        </Offcanvas.Body>
      </Offcanvas>

    
    </>
  )
}

export default SidebarCanvus