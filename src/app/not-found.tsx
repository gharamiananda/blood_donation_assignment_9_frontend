'use client';

import React from 'react';

const NotFoundPage = () => {
   return (
    <>
    
    
   <div className="breadcrumb_section overflow-hidden ptb-150 error_bread">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 text-center">
        <h2>Error 404</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li className="active">404</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<section className="error ptb-115">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-12">
        <div className="error_detail text-center">
          <span className="mb-1 mb-xl-4 mb-lg-4 mb-md-3 mb-sm-2">404</span>
          <h1 className="mb-4 mb-xl-5">Page Not Found</h1>
          <p className="mb-4 mb-xl-5">
            The page you are looking for might have been removed had its
            name changed or is temporarily unavailable
          </p>
          <a href="index.html" className="red_btn explore_now">Back To Home</a>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
   );
};

export default NotFoundPage;
