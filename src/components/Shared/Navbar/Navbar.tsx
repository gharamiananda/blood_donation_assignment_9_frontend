'use client';

import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
   const userInfo = useUserInfo();
   const router = useRouter();

   const handleLogOut = () => {
      logoutUser(router);
   };

   return (
     
 <header>
 <div className="header_top d-none d-lg-block d-xl-block d-xxl-block">
   <div className="container">
     <div className="row">
       <div className="col-xl-3 col-lg-3">
         <div className="header_top_content">
           <span><i className="fa-solid fa-phone" /></span>
           <a href="tel:01977259912">+01 (977) 2599 12</a>
         </div>
       </div>
       <div className="col-xl-3 col-lg-3">
         <div className="header_top_content">
           <span><i className="fa-solid fa-envelope" /></span>
           <a href="mailto:company@domin.com">company@domin.com</a>
         </div>
       </div>
       <div className="col-xl-3 col-lg-3">
         <div className="header_top_content">
           <span><i className="fa-solid fa-location-dot" /></span>
           <a href="#">3146 Koontz Lane, USA</a>
         </div>
       </div>
       <div className="col-xl-3 col-lg-3">
         <div className="header_top_social">
           <p>Follow Now</p>
           <ul className="d-flex">
             <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
             <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
             <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
             <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
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

          <li><Link href="profile">My Profile</Link></li>

        </ul>
      </div>
      <div className="col-xl-3 col-lg-2  d-none d-xxl-block d-xl-block">
        <div className="header_search_menu d-flex">
         
          <div>
            <Link href="/login" className="red_btn get_code">Login</Link>
          </div>
        </div>
      </div>
      {/* mobile menu bar */}
      <div className="col-lg-10 col-md-8 col-6 d-block d-xxl-none d-xl-none">
        <div className="d-flex align-items-center gap-2 justify-content-end">
          <div className="dropdown dropdown_search">
            <button className="search-btn " data-bs-toggle="dropdown" aria-expanded="true"><i className="fa-solid fa-magnifying-glass" /></button>
            <div className="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
              <form className="search-form d-flex align-items-center gap-2">
                <input type="text" placeholder="Search..." className="theme-input bg-transparent" />
                <button type="submit" className="submit-btn">Go</button>
              </form>
            </div>
          </div>
          <div className="mobile_menu">
            <button className="header_toggle_btn bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-mobile">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</header>
   );
};

export default Navbar;
