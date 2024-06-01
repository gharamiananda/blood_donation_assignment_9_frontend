import Image from "next/image";


const Footer = () => {
  return (
    <footer>
    <div className="footer_top pt-115">
      <div className="container ">
        <div className="row border-bottom justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
            <div className="footer_content">
              <h5>About Us</h5>
              <p>Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat</p>
              <ul>
                <li><span>Phone:</span> +1(456)657-887, 999</li>
                <li><span>Email:</span> contactblood@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-4">
            <div className="footer_content">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="service.html"><i className="fa-solid fa-angles-right" /> Services</a></li>
                <li><a href="about.html"><i className="fa-solid fa-angles-right" /> About Us</a></li>
                <li><a href="campaign.html"><i className="fa-solid fa-angles-right" /> New Campaign</a></li>
                <li><a href="blog-details.html"><i className="fa-solid fa-angles-right" /> Latest News</a></li>
                <li><a href="contact.html"><i className="fa-solid fa-angles-right" /> Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-4">
            <div className="footer_content">
              <h5>Our Services</h5>
              <ul>
                <li><a href="donate.html"><i className="fa-solid fa-angles-right" /> Blood Donation</a></li>
                <li><a href="#"><i className="fa-solid fa-angles-right" /> Health Check</a></li>
                <li><a href="donate.html"><i className="fa-solid fa-angles-right" /> Blood Bank</a></li>
                <li><a href="donate.html"><i className="fa-solid fa-angles-right" /> Donate Process</a></li>
                <li><a href="donate.html"><i className="fa-solid fa-angles-right" /> Blood Info</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="footer_content">
              <h5>Latest News</h5>
              <div className="footer_blog">
                <div className="fblog_item mb-3">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="fblog_img img">
                        <a href="blog-details.html"><Image
                        
                        width={400}
                        height={400}
                        src="/assets/images/f1.jpg" alt='' /></a>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="fblog_content">
                        <a href="blog-details.html"> A Formula For Help And Happiness</a>
                        <span>18 February, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fblog_item mb-3">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="fblog_img img">
                        <a href="blog-details.html"><Image
                        width={400}
                        height={400}
                        src="/assets/images/f2.jpg" alt='' /></a>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="fblog_content">
                        <a href="blog-details.html"> Donation is hope for poor helpless children</a>
                        <span>18 February, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_middle">
          <div className="col-xl-6 col-lg-6 col-12 mb-5">
            <div className="footer_subscrive">
              <h6>Subscribe us for more update &amp; news !!</h6>
              <form action="#">
                <input type="email" placeholder="Enter Your Email" />
                <button className="red_btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="footer_social">
              <ul className="social_icon d-flex justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-center  gap-2">
                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
              </ul>
              <ul className="page_link d-flex justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-center gap-2 flex-wrap">
                <li><a href="privacypolicy.html">Privacy Policy</a></li>
                <li><a href="#">/</a></li>
                <li><a href="terms.html">Terms &amp; Condition</a></li>
                <li><a href="#">/</a></li>
                <li><a href="faq.html">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p>Copyright © 2020 Blad Ai. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
