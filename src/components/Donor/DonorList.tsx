

import { TDonor } from '@/types/donor';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import imhhh from '../../assets/doctor-image1.png'
import donorService from '@/services/actions/donorService';
import ViewDetailsBtn from '@/app/(withCommonLayout)/donor-list/components/ViewDetailsBtn';


const DonorListComponent =async () => {


  const donorListPromise=await donorService.getDonorListfn();
  const donorList= await donorListPromise.json();

  console.log('donorList', donorList)
  return (
    <> <div className="container">
    <div className="row mb-5">
      <div className="col-12">
        <div className="common_title text-center">
       
          <h2>Meet Donors</h2>
        </div>
      </div>
    </div>
    <div className="container">
    
    <div className="row justify-content-start">

        {
            donorList?.data?.data?.map((it:TDonor)=>(

          
      <div key={it?.id} className=" col-lg-3 col-md-6 col-12 mb-4 ">
        <div className="team_details h-100 d-flex flex-column">
          <div className="team_img position-relative" style={{height:'150px'}}>
            <Image
             width={500} 
            height={500} src={it?.profileImg ||imhhh} alt='' className="w-100 position-absolute h-100 object-fit-cover" />
           
          </div>
          <div className="py-4 text-center position-relative  d-flex flex-column justify-content-end mt-auto">
            <a href=''>
              <h6>{`${it?.name.firstName} ${it?.name.middleName??''} ${it?.name.lastName}`} </h6>
            </a>
            <p>{it?.gender}</p>
            <p>{it?.bloogGroup}</p>


            <ViewDetailsBtn   url={`/donor-list/${it?.username}`} />
          </div>
        </div>
      </div>
       ))
    }
    </div>

    <div className="d-flex justify-content-center">

    <Link    href={`/donor-list`} className="red_btn get_code mt-3  ">View All Donors</Link> 
    </div>


  </div>


  </div></>
  )
}

export default DonorListComponent