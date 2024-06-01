import React from 'react'

const ProfilePage = () => {
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

<section className="km__message__box ptb-120">
  <div className="container">
    <div className="km__contact__form">
      <div className="row g-5">
        <div className="col-xl-7">
          <div className="km__box__form">
            <h4 className="mb-40">Get In Touch</h4>
            <p className="mb-30">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms
            </p>
            <form action="#" className="km__main__form">
              <div className="row">
                <div className="col-sm">
                  <input type="text" placeholder="Frist Name" />
                </div>
                <div className="col-sm">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="col">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <textarea placeholder="Message" rows={3} defaultValue={""} />
                </div>
              </div>
              <button type="submit" className="contact__btn">
                Submit Request
                <i className="fa-solid fa-angles-right" />
              </button>
            </form>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="km__form__content">
            <span className="sub__title">Blood Excellence!</span>
            <h4 className="km__form__title">Expanded Blood Donate Services Here</h4>
            <p className="form_des">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms
            </p>
            <ul className="km__address">
              <li>
                <i className="fa fa-phone-alt" />
                <span>Emergency Line: (002) 012612457</span>
              </li>
              <li>
                <i className="fas fa-location-dot" />
                <span>Location: Street 68, Mahattan, <br /> New York</span>
              </li>
              <li>
                <i className="fas fa-clock" />
                <span>Mon - Fri: 8:00 am - 7:00 pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>

  )
}

export default ProfilePage