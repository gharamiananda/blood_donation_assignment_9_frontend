import Link from 'next/link'
import React from 'react';

import imhhh from '../../../assets/images/c1.png'

const DonorListPage = () => {
    return (
        <>

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


            <section className="km__Who__section ptb-120">
                <div className="container">
                    <div className="row align-items-center g-0 g-xxl-5 g-xl-5 g-lg-5">
                     {  [1,2,3,4,56,7].map(it=><div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div><div className="campaign_slier_item" style={{ width: '100%', display: 'inline-block' }}>
                                <div className="row g-0">
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-5">
                                        <div className="campaign_img">
                                            <img src={imhhh} alt='' />
                                            <a href="campaign-details.html" tabIndex={0}>Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                                        <div className="campaign_content">
                                            <div className="meta_date">
                                                <span><i className="fa-regular fa-calendar-days" /> 13 February, 2022</span>
                                            </div>
                                            <a href="campaign-details.html" tabIndex={0}>
                                                <h6> Donor's name</h6>
                                            </a>


                                            <div className="meta_time d-flex gap-4">
                                                <span><i className="fa-regular fa-clock" />

Availability status</span>
                                                <span><i className="fa-solid fa-location-dot" />Location, USA</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>)}

                    </div>
                </div>
            </section>


        </>
    )
}

export default DonorListPage


