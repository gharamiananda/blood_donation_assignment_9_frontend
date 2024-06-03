import Link from 'next/link'
import React from 'react';

import imhhh from '../../../assets/doctor-image1.png'
import Image from 'next/image';
import donorService from '@/services/actions/donorService';
import { BloodGroup, TDonor } from '@/types/donor';

const DonorListPage =async () => {


  const bloodTypes = [
    { value: "A_POSITIVE", label: "A+" },
    { value: "A_NEGETIVE", label: "A-" },
    { value: "B_POSITIVE", label: "B+" },
    { value: "B_NEGETIVE", label: "B-" },
    { value: "AB_POSITIVE", label: "AB+" },
    { value: "AB_NEGETIVE", label: "AB-" },

    { value: "O_POSITIVE", label: "O+" },
    { value: "O_NEGETIVE", label: "O-" },
  ];
  const donorListPromise= await donorService.getDonorList();
  const donorList = await donorListPromise.json();

  console.log('donorList', donorList)

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
          <div className="bl__sidebar__widget search__widget mb-60 ">
            <form action="#" className='border-info'>
              <input type="text" placeholder="Search" />
              <button type="submit" className="bl-submit-btn"><i className="fas fa-magnifying-glass" /></button>
            </form>
          </div>
          
          <div className="bl-sidebar-widget bl-category-widget mt-20">
            <h5 className="widget-title mb-3">Gender</h5>
            <ul className="bl-ct-list">
              
              {
                ['Male','Female','Other'].map(it=>(

                  <li key={it}><a href="#"><span className="me-2"><input type='checkbox'   /></span> {it}</a>  </li>
                ))
              }
              
              
            </ul>
          </div>
          <div className="bl-sidebar-widget bl-category-widget">
            <h5 className="widget-title mb-3">Blood Group</h5>
            <ul className="bl-ct-list">
             
             <select>
              <option >Choose option</option>
              {
                bloodTypes.map(it=>(
                  <option  key={it.value} value={it.value}>{it.label}</option>

                ))
              }
             </select>
               
              
              
            </ul>
          </div>

          <div className="bl-sidebar-widget bl-category-widget">
            <h5 className="widget-title mb-3">Location Area</h5>
            <ul className="bl-ct-list">
             
             <select>
              <option >Choose option</option>
              {
                bloodTypes.map(it=>(
                  <option  key={it.value} value={it.value}>{it.label}</option>

                ))
              }
             </select>
               
              
              
            </ul>
          </div>
          <div className="bl-sidebar-widget bl-category-widget">
            <h5 className="widget-title mb-3">Availability</h5>
            <ul className="bl-ct-list">
             
               
              {
                ['Yes','No'].map(it=>(

                  <li key={it}><a href="#"><span className="me-2"><input type='radio'  name='availability'  /></span> {it}</a>  </li>
                ))
              }
              
            </ul>
          </div>
         
         
        </div>
      </div>
      <div className="col-xl-9">



     <section className="team  ">
  <div className="container">
    
    <div className="row justify-content-start">

        {
            donorList?.data?.map((it:TDonor)=>(

          
      <div key={it?.id} className="col-xl-4 col-lg-4 col-md-6 col-12 mb-4 ">
        <div className="team_details h-100">
          <div className="team_img ">
            <Image
             width={500} 
            height={500} src={it?.profileImg ||imhhh} alt='' className="w-100" />
           
          </div>
          <div className="py-4 text-center position-relative">
            <a href=''>
              <h5>{`${it?.name.firstName} ${it?.name.middleName??''} ${it?.name.lastName}`} </h5>
            </a>
            <p>{it?.gender}</p>
            <p>{it?.bloogGroup}</p>


            <Link href={`/donor-list/${it?.username}`} className="red_btn get_code mt-3 w-100 ">View Details</Link>
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


