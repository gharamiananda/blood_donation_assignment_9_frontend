import React from 'react'

const AboutPage = () => {
  return (

    <>
   <div className="breadcrumb_section overflow-hidden ptb-150">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 text-center">
        <h2>Contact Us</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li className="active">Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    
    <section className="km__Who__section ptb-120">
  <div className="container">
    <div className="row align-items-center g-0 g-xxl-5 g-xl-5 g-lg-5">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="km__who__content">
          <h2 className="mb-30">Who We Are</h2>
          <h5 className="mb-30">We are here not for income, but for outcome</h5>
          <p className="mb-30">
            Which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish.
            In a free hour, when untrammelled and when nothing prevents
          </p>
          <a href="about.html" className="primary__btn">Explore Now</a>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="km__who__imgbx img">
          <img src="assets/images/about/doctor.jpg" alt="images not found" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</section>
</>

  )
}

export default AboutPage