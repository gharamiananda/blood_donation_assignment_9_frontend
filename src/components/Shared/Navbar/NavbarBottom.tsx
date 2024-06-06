'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import AuthButton from './AuthButton'
import AuthProtected from '../AuthProtected'
import MyProfileBtn from './MyProfileBtn'
import SidebarCanvus from '@/components/Ui/SidebarCanvus'

const NavbarBottom = () => {


  const [show, setShow] = useState(false);
  
    
  return (
    <div className="header_bottom header_bottom2">
    <div className="container">
      <div className="row align-items-center position-relative">
        <div className="col-xl-3 col-lg-3 col-md-4 col-6">
          <div className="header_logo">
            <Link href="/" >
           <h6 className='red_color'>
           Ag Blood Center   
              </h6>   
              
              </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg- d-none d-xxl-block d-xl-block">
          <ul className="main_menu">
          
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/donor-list">Donor list</Link></li>
  
            <li><Link href="/contact">contact Us</Link></li>
            <MyProfileBtn />
  
  
          </ul>
        </div>
        <div className="col-xl-3 col-lg-2  d-none d-xxl-block d-xl-block">
          <div className="header_search_menu d-flex">
           
            <div>
              <AuthButton />
            </div>
          </div>
        </div>
        {/* mobile menu bar */}
        <div className="col-lg-10 col-md-8 col-6 d-block d-xxl-none d-xl-none">
          <div className="d-flex align-items-center gap-2 justify-content-end">
            <div className="dropdown dropdown_search">
              {/* <button className="search-btn " data-bs-toggle="dropdown" aria-expanded="true"><i className="fa-solid fa-magnifying-glass" /></button> */}
              <div className="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                <form className="search-form d-flex align-items-center gap-2">
                  <input type="text" placeholder="Search..." className="theme-input bg-transparent" />
                  <button type="submit" className="submit-btn">Go</button>
                </form>
              </div>
            </div>
            <div className="mobile_menu" >
              <button className="header_toggle_btn bg-transparent border-0" type="button" onClick={()=>setShow(true)} >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<SidebarCanvus  setShow={setShow} show={show} />

  </div>
  )
}

export default NavbarBottom