import Image from 'next/image';
import help1 from '../../assets/images/help1.png';
import help2 from '../../assets/images/help2.png';
import r1 from '../../assets/images/r1.jpg';
import r2 from '../../assets/images/r2.jpg';



import s1 from '../../assets/images/s1.jpg';
import s2 from '../../assets/images/s2.jpg';
import s3 from '../../assets/images/s3.jpg';
import d1 from '../../assets/images/d1.png';
import d2 from '../../assets/images/d2.png';
import d3 from '../../assets/images/d3.png';
import b1 from '../../assets/images/b1.png';



import Link from 'next/link';
import DonorListComponent from '@/components/Donor/DonorList';
import SearchForm from '@/utils/SearchForm';
import DonorMap from '@/components/Map/ShowDonorMap';
import { Container } from 'react-bootstrap';





const HomePage = () => {
  return (
    <>



      <>

      

<section className='position-relative'>



        <section className="hm1_hero_slider">
        <div className="container py-5 mb-5">
            <div className="row">
              <div className="col-12">
                <div className="hm1_content">
                  <div className="video_play d-flex gap-2 align-items-center">
                    <a href="https://youtu.be/K87aFjB7Ff0?si=kpgANQNewn8DSOtq" data-fancybox className="red_bg d-inline-flex align-items-center justify-content-center" tabIndex={0}><i className="fa-solid fa-play" /></a>
                    <h6>Intro Video</h6>
                  </div>
                  <h3>Donate blood,save life !</h3>
                  <h1>Donate Blood And Inspires Others.</h1>
                  <Link href="/donor-list" className="explore_now red_btn" tabIndex={0}>Explore Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="register_donate ptb-115 gray">
          <div className="container">
            <div className="row g-0 register_top black_bg">
              <div className="col-xl-6 col-lg-6 col-12 h-100">
                <div className="register red_bg">
                  <div className="register_content">
                    <h4>Register Now</h4>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                      pain,
                    </p>
                  </div>
                  <div className="register_icon black_hover">
                    <Link href="/register"><i className="fa-solid fa-arrow-right-to-bracket" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6  col-12 h-100">
                <div className="register black_bg">
                  <div className="register_content">
                    <h4>Need Blood Now</h4>
                  

                    <div className="bl__sidebar__widget search__widget  ">
         <SearchForm />
          </div>
          
                  </div>
                  <div className="register_icon red_hover">
                    <Link href="/donor-list"><i className="fa-solid fa-arrow-right-to-bracket" /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="register_donate_item">
                  <div className="donate_item_top">
                    <div className="donate_img">
                      <Image  height={500} width={500}  src={s1} alt='' />
                    </div>
                    <div className="donate_content text-center">
                      <span><Image height={50} width={50}   src={d1} alt='' /></span>
                      <a href="#">
                        <h5>Become a donate</h5>
                      </a>
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give</p>
                    </div>
                  </div>
                  <Link href="/about" className="d-block black_bg text-center">Read More</Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="register_donate_item">
                  <div className="donate_item_top">
                    <div className="donate_img">
                      <Image  height={500} width={500}  src={s2} alt='' />
                    </div>
                    <div className="donate_content text-center">
                      <span><Image  height={60} width={60}    src={d2} alt='' /></span>
                      <a href="#">
                        <h5>Why give blood?</h5>
                      </a>
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give</p>
                    </div>
                  </div>
                                   <Link href="/about" className="d-block black_bg text-center">Read More</Link>

                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="register_donate_item position-relative">
                  <div className="donate_item_top">
                    <div className="donate_img">
                      <Image height={500} width={500} src={s3} alt='' />
                    </div>
                    <div className="donate_content text-center">
                      <span><Image height={60} width={60}  src={d3} alt='' /></span>
                      <a href="#">
                        <h5>How Denations Help?</h5>
                      </a>
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give</p>
                    </div>
                  </div>
                                   <Link href="/about" className="d-block black_bg text-center">Read More</Link>

                </div>
              </div>
            </div>
          </div>
        </section>


        <div>
          <section className="help_people ptb-115 overflow-hidden">
            <div className="container">
              <div className="row align-items-center g-lg-5 g-xl-5 g-xxl-5">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4 mb-xl-0 mb-lg-0 mb-md-0">
                  <div className="help_wrap position-relative">
                    <Image src={help1 as any} alt='' />
                    <Image src={help2 as any} alt='' className="help_over" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="help_content">
                    <p className="red_color">Help The People in Need</p>
                    <h2>Welcome to Blood
                      Donors Organization</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                      suspendisse the gravida. Risus commodo viverra maecenas</p>
                    <div className="d-flex justify-content-between">
                      <ul>
                        <li><i className="fa-solid fa-angles-right" /> Good Service</li>
                        <li><i className="fa-solid fa-angles-right" /> Help People</li>
                        <li><i className="fa-solid fa-angles-right" /> Hugine Tools</li>
                      </ul>
                 
                    </div>
                    <Link href="/donor-list" className="explore_now red_btn">Explore Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="hm1_counter">
            <div className="container position-relative">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                  <div className="counter_item text-center d-flex flex-column align-items-center">
                    <Image width={50} height={50} src={d1} alt='' />
                    <h2><span className="count">25</span></h2>
                    <p>Year experience</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                  <div className="counter_item text-center d-flex flex-column align-items-center">
                  <Image width={50} height={50} src={d1} alt='' />

                    <h2><span className="count">3225</span></h2>
                    <p>happy donors</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                  <div className="counter_item text-center d-flex flex-column align-items-center">
                  <Image width={50} height={50} src={d1} alt='' />

                    <h2><span className="count">90</span></h2>
                    <p>total awards</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="counter_item text-center d-flex flex-column align-items-center">
                  <Image width={50} height={50} src={d1} alt='' />

                    <h2><span className="count">3168</span></h2>
                    <p>happy recipient</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="service ptb-115">
            <div className="container">
              <div className="row mb-5 ">
                <div className="col-12">
                  <div className="common_title text-center">
                    <p>What We do</p>
                    <h2>our best services</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center g-0 service_wrap">
                <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_1">
                  <div className="service_item">
                    <div className="img">
                      <Image width={500} height={500} src={s1} alt='' />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_2">
                  <div className="service_content ps-5">
                    <h1>01</h1>
                    <a href="#">
                      <h4>Blood Donation</h4>
                    </a>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                 <Link href="/about" className="red_btn service_btn">Read More</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_3">
                  <div className="service_content text-end pe-5">
                    <h1>02</h1>
                    <a href="#">
                      <h4>Health Check</h4>
                    </a>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                 <Link href="/about" className="red_btn service_btn">Read More</Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_4">
                  <div className="service_item">
                    <div className="img">
                      <Image width={500} height={500}  src={s2}  alt='' />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6  col-12 mb-5 order_5">
                  <div className="service_item">
                    <div className="img">
                      <Image width={500} height={500} src={s3} alt='' />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6  col-12 order_6">
                  <div className="service_content ps-5">
                    <h1>03</h1>
                    <a href="#">
                      <h4>Blood Bank</h4>
                    </a>
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.</p>
                 <Link href="/about" className="red_btn service_btn">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
         
          <section className="testimonial ptb-115">
            <div className="container">
              <div className="row ">
                <div className="col-12 mb-5">
                  <div className="common_title text-center">
                    <p>testimonial</p>
                    <h2>What Our Clients Say</h2>
                  </div>
                </div>
                <div className="testi_slider slider-spacing slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 4290, transform: 'translate3d(-1170px, 0px, 0px)' }}><div className="slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts2.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Niro Markusa</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts3.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nicolas Mark</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts1.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nora Fateha</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 366 }}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={0}><Image width={500} height={500} src="/assets/images/ts1.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nora Fateha</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{ width: 366 }}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={0}><Image width={500} height={500} src="/assets/images/ts2.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Niro Markusa</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{ width: 366 }}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={0}><Image width={500} height={500} src="/assets/images/ts3.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nicolas Mark</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide" data-slick-index={3} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts1.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nora Fateha</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={4} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts1.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nora Fateha</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={5} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts2.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Niro Markusa</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={6} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts3.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nicolas Mark</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div><div className="slick-slide slick-cloned" data-slick-index={7} aria-hidden="true" style={{ width: 366 }} tabIndex={-1}><div><div className="testi_slider_item" style={{ width: '100%', display: 'inline-block' }}>
                  <div className="testi_content">
                    <div className="star">
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                      <span><i className="fa-solid fa-star" /></span>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur
                      cupidatatproident,
                      culpa qui officia deserunt mollit</p>
                  </div>
                  <div className="testi_owner d-flex gap-4 align-items-center">
                    <div className="testi_img img">
                      <a href="#" tabIndex={-1}><Image width={500} height={500} src="/assets/images/ts1.png" alt='' /></a>
                    </div>
                    <div className="testi_name">
                      <h5>Nora Fateha</h5>
                      <p>Designer</p>
                    </div>
                  </div>
                </div></div></div></div></div></div>
              </div>
            </div>
          </section>
      
          <section className="team ptb-115">
            <div className="container">
            
              <DonorListComponent />
            </div>
          </section>
        
          <section className="change red_bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-9 col-lg-9  col-12">
                  <div className="change_content">
                    <h2> Let&rsquo;s change the world, Join us now!</h2>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                      but occasionally
                      circumstances occur in which toil and pain can procure reat pleasure.</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3  col-12 text-xl-end text-lg-end text-center">
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </section>

          

          <div className="offcanvas offcanvas-start" id="offcanvas-mobile">
            <div className="offcanvas-body">
              <div className="mobile-menu">
                <a href="index.html" className="logo py-3"><Image width={500} height={500} src="/assets/images/icon/red-logo.png" alt="logo" className="img-fluid" /></a>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                <ul className="accordion accordion-flush mobile_dropdown" id="accordionFlushExample">
                  <li className="accordion-item">
                    <h2>
                      <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false">
                        Home
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <ul>
                          <li><a href="index.html">Home Page 1</a></li>
                          <li><a href="index-2.html">Home Page 2</a></li>
                          <li><a href="index-3.html">Home Page 3</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <h2><a href="about.html">About</a></h2>
                  </li>
                  <li className="accordion-item">
                    <h2>
                      <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false">
                        Pages
                      </button>
                    </h2>
                    <div id="flush-collapsetwo" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <ul>
                          <li><a href="service.html">service</a></li>
                          <li><a href="service-details.html">service Details</a></li>
                          <li><a href="faq.html">Faq</a></li>
                          <li><a href="photo-gallary.html">Photo Gallary</a></li>
                          <li><a href="donate.html">Donate</a></li>
                          <li><a href="register.html">Registation</a></li>
                          <li><a href="privacypolicy.html">Privacy policy</a></li>
                          <li><a href="terms.html">Terms &amp; Condition</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <h2>
                      <button className="accordion-button collapsed p-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false">
                        Blog
                      </button>
                    </h2>
                    <div id="flush-collapsethree" className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <ul>
                          <li><a href="blog-default.html">Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                          <li><a href="blog-details-left-sidebar.html">Blog Left</a></li>
                          <li><a href="blog-details-right-sidebar.html">Blog Right</a></li>
                          <li><a href="blog-style1.html">Blog Style 1</a></li>
                          <li><a href="blog-style2.html">Blog Style 2</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <h2><a href="contact.html">Contact</a></h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="offcanvas offcanvas-end right_canvas" tabIndex={-1} id="offcanvasRight">
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div className="content-top mb-100">
                <a href="index.html">AG. Blood Center</a>
                <p>Distrak Street 2SK Line, Germanygalore@inside-support.com (+125)
                  2156-2145</p>
              </div>
              <div className="offcanvus-gallery d-flex align-items-center flex-wrap">
                <a className="img" href="#"><Image width={500} height={500} src="/assets/images/r1.jpg" alt="not found" /></a>
                <a className="img" href="#"><Image width={500} height={500} src="/assets/images/r2.jpg" alt="not found" /></a>
                <a className="img" href="#"><Image width={500} height={500} src="/assets/images/r1.jpg" alt="not found" /></a>
                <a className="img" href="#"><Image width={500} height={500} src="/assets/images/r3.jpg" alt="not found" /></a>
                <a className="img" href="#"><Image width={500} height={500} src="/assets/images/r1.jpg" alt="not found" /></a>
                <a className="img" href="#"><Image width={500} height={500} src="/assets/images/r2.jpg" alt="not found" /></a>
              </div>
              <div className="offcanvus-newsletter">
                <h4 className="mb-4 text-center">Newsletter</h4>
                <form action="#">
                  <input type="email" placeholder="Enter your e-mail" className="theme-input mb-3" />
                  <button type="button" className="black_btn w-100 border-0 p-3"><span>SUBSCRIBE
                    NOW</span></button>
                </form>
                vcxcx </div>
            </div>
          </div>
        </div>


        </section>
        <div className="">


        <Container>

<DonorMap />
</Container>
        </div>


      </>
    </>
  );
};

export default HomePage;
