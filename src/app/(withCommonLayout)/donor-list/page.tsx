import Link from 'next/link'
import React from 'react';

import imhhh from '../../../assets/doctor-image1.png'
import Image from 'next/image';

const DonorListPage = () => {
    return (
        <section className='gray_bg'>

            <div className="breadcrumb_section overflow-hidden ptb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 text-center">
                            <h2>Donor list</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li className="active">Donor list</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


          





       


<div className="blog__details__section ptb-120 ">
  <div className="container">
    <div className="row g-5">
      <div className="col-xl-3">
        <div className="km__blog__sidebar">
          <div className="bl__sidebar__widget search__widget mb-60">
            <form action="#">
              <input type="text" placeholder="Search" />
              <button type="submit" className="bl-submit-btn"><i className="fas fa-magnifying-glass" /></button>
            </form>
          </div>
          
          <div className="bl-sidebar-widget bl-category-widget mt-20">
            <h5 className="widget-title mb-3">Category</h5>
            <ul className="bl-ct-list">
              <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right" /></span> Blood Relation</a>
              </li>
              <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right" /></span> AB- Blood Donor</a>
              </li>
              
            </ul>
          </div>
          <div className="bl-sidebar-widget bl-category-widget">
            <h5 className="widget-title mb-3">Category</h5>
            <ul className="bl-ct-list">
              <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right" /></span> Blood Relation</a>
              </li>
              <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right" /></span> AB- Blood Donor</a>
              </li>
              
            </ul>
          </div><div className="bl-sidebar-widget bl-category-widget">
            <h5 className="widget-title mb-3">Category</h5>
            <ul className="bl-ct-list">
              <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right" /></span> Blood Relation</a>
              </li>
              <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right" /></span> AB- Blood Donor</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-9">



     <section className="team  ">
  <div className="container">
    
    <div className="row justify-content-center">

        {
            [1,3,4,5,3,2,1,3,4,5,3,2].map(it=>(

          
      <div key={it} className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4">
        <div className="team_details">
          <div className="team_img ">
            <Image
             width={500} 
            height={500} src="/assets/images/t1.jpg" alt='' className="w-100" />
            <ul className="d-flex">
              <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
              <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
            </ul>
          </div>
          <div className="team_content text-center">
            <a href=''>
              <h5>Nora Khaypeia</h5>
            </a>
            <p>Co-Founder</p>
          </div>
        </div>
      </div>
       ))
    }
    </div>
  </div>
</section>

    
      </div>
    </div>
  </div>
</div>


        </section>
    )
}

export default DonorListPage


