


import SidebarCanvus from '@/components/Ui/SidebarCanvus';
import NavbarBottom from './NavbarBottom';

const Navbar = () => {
  

   return (
     
 <header>
 <div className="header_top d-none d-lg-block d-xl-block d-xxl-block">
   <div className="container">
     <div className="row">
       <div className="col-xl-3 col-lg-3">
         <div className="header_top_content">
           <span><i className="fa-solid fa-phone" /></span>
           <a href="tel:01878789876">+01 (977) 18787</a>
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
           <a href="#">3146 west bengal, Kolkata</a>
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
 <NavbarBottom />



</header>
   );
};

export default Navbar;
