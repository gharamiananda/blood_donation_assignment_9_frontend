'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import imhhh from '../../../../assets/doctor-image1.png'
import Image from 'next/image';
import {  TDonor } from '@/types/donor';
import { useGetAllDonorsQuery } from '@/redux/api/donorApi';
import useDebounce from '@/hooks/useDebounce';
import { useGetMYProfileQuery } from '@/redux/api/myProfile';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Card, Placeholder } from 'react-bootstrap';
import placeholderImg from '../../../../assets/images/placeholderImg.png'
import Pagination from '@/utils/Pagination';




const DonorListCOmponent = () => {

  const[selectedGender,setselectedGender]=useState<string[]>([]);
  const[selectedBloodGroups,setselectedBloodGroups]=useState<string[]>([]);
  const[availability,setavailability]=useState<string>('Yes');
  const[searchTerm,setsearchTerm]=useState<string>('');
  const router=useRouter();

const paramQuery=useSearchParams();


const searchTermQuery=paramQuery.get('searchTerm');


useEffect(()=>{
  if(searchTermQuery){

    setsearchTerm(searchTermQuery);

    router.replace('donor-list')
  }
},[searchTermQuery])
  




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

  const debounceText=useDebounce(searchTerm, 600)

  const { data, isLoading } = useGetMYProfileQuery(undefined);

  const[page,setPage]=useState(1);



  const {data:donorList,isFetching}=useGetAllDonorsQuery({queryParams:{page:page,limit:5,gender:selectedGender,bloogGroup:selectedBloodGroups,availability:availability ==='Yes' ?true:false,searchTerm:debounceText}}
    )

  console.log('availability', availability)

const metaData=donorList?.meta;


console.log('donorList', donorList)

  const renderPaginationNumbers = () => {
    // const totalPages = Math.ceil(metaData?.count / totalPage);
    const startPage = Math.max(1, Math.min(page - 2, metaData?.totalPage - 4));
    const endPage = Math.min(startPage + 4, metaData?.totalPage);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li className={page === i ? 'page-item active' : 'page-item'} key={i}>
          <Button variant="link" className="page-link " onClick={() => setPage(i)}>{i}</Button>
        </li>
      );
    }
    return pages;
  };


  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  };
  const canNextPage = page < metaData?.totalPage;

  const nextPage = () => {
    if (page < metaData?.totalPage) {
      setPage(page + 1)
    }
  };

  console.log('donorList', donorList)
  const canPreviousPage = page > 1

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
      <div className="col-xl-3 pt-2 border border-danger">
        <div className="km__blog__sidebar   ">
          <div className="bl__sidebar__widget search__widget  bg-black  border border-danger ">
            <form onSubmit={e=>{
              e.preventDefault();
            }} className='border-info'>
              <input
              value={searchTerm}
              onChange={e=>{
                
                setPage(1)
                setsearchTerm(e.target.value)}} type="text" placeholder="Search by donor name location" />
              <button type="submit" className="bl-submit-btn"><i className="fas fa-magnifying-glass" /></button>
            </form>
          </div>
          
          <div className="bl-sidebar-widget bl-category-widget mt-20">
            <h5 className="widget-title mb-3">Gender</h5>
            <ul className="bl-ct-list">
              
              {
               [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'other', value: 'other' }].map(it=>(

                  <li key={it.value} > <label htmlFor={it.value} className='cursor-pointer'> <span className="me-2"><input  name={it.value} id={it.value} type='checkbox' onChange={(e)=>setselectedGender(prev=>prev.includes(it.value)?prev.filter(item=>item!==it.value):[...prev,it.value])}   /></span> {it.label}  </label></li>
                ))
              }
              
              
            </ul>
          </div>
          <div className="bl-sidebar-widget bl-category-widget border-top  border-danger">
            <h5 className="widget-title mb-3">Blood Group</h5>
            <ul className="bl-ct-list">
             
             <select
                  onChange={(e)=>setselectedBloodGroups( e.target.value=== 'Choose option' ? []: [e.target.value])} 
             
             >
              <option >Choose option</option>
              {
                bloodTypes.map(it=>(
                  <option 
                  
                  key={it.value} value={it.value}>{it.label}</option>

                ))
              }
             </select>
               
              
              
            </ul>
          </div>

          
          <div className="bl-sidebar-widget bl-category-widget  border-top  border-danger">
            <h5 className="widget-title mb-3">Availability</h5>
            <ul className="bl-ct-list">
             
               
              {
                ['Yes','No'].map(it=>(

                  <li key={it}><label htmlFor={it} className='cursor-pointer'><span className="me-2"><input id={it}  checked={availability===it} type='radio'  name='availability'
                  
                  onChange={e=>setavailability(it)}
                  /></span> {it}</label>  </li>
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


isFetching ? <>


{[...Array(3)].map(it=>(

<div key={it} className=" col-lg-4 col-md-6 col-12 mb-4 ">

<Card >
        <Image alt='placeholder' width={300} height={100} src={placeholderImg} />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
</div>
))}

</>  :


<>


{

donorList?.data?.length > 0 ? 
            donorList?.data?.map((it:TDonor)=>(

          
      <div key={it?.id} className=" col-lg-4 col-md-6 col-12 mb-4 ">
        <div className="team_details h-100 d-flex flex-column">




          <div className="team_img position-relative" style={{height:'150px'}}>
            <Image
             width={500} 
            height={500} src={it?.profileImg ||imhhh} alt='' className="w-100 position-absolute h-100 object-fit-cover" />
           
          </div>
          <div className="py-4 text-center position-relative  d-flex flex-column justify-content-end mt-auto">
            <a href=''>
              <h5>{`${it?.name.firstName} ${it?.name.middleName??''} ${it?.name.lastName}`} </h5>
            </a>
            <p>{it?.gender}</p>
            <p>{it?.bloogGroup}</p>


            <Link href={data?.email  ? `/donor-list/${it?.username}`:'/login'} className="red_btn get_code mt-3 w-100 ">View Details</Link>
          </div>
        </div>
      </div>
       )) :  <h2 className='text-danger'>No Donors found</h2> }

       </>
    }
    </div>
  </div>

<div className="mt-5 d-flex justify-content-end">


{
  isFetching ? 
  <div className='' >

  <Placeholder as={Card.Text} animation="glow">
  <Placeholder xs={7} /> <Placeholder xs={4} />
  </Placeholder>
  </div>
  
:

  <Pagination
  shoulNotShow={!donorList?.data?.length}


            renderPaginationNumbers={renderPaginationNumbers()}
            previousPage={previousPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
          /> }
</div>
</section>

    
      </div>
    </div>
  </div>
</div>


        </section>
    )
}

export default DonorListCOmponent


