import "./footer.css";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="footer-section py-3">
      <footer id="footer" className="footer web pt-5">
        <div className="container">
          <div className="row justify-content-between footer-first-row1">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <img
                    src={logo}
                    width="100"
                    height="31"
                    alt="IAS GAON"
                    className="img-fluid mb-4"
                    style={{ borderRadius: "7px" }}
                  />
                  <p className="font-14 text-heading">
                    Next Generation Institute for UPSC Civil Services
                    Examination Preparation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-12  mt-md-0">
              <div className="row mt-md-2 mt-0">
                <div className="row justify-content-lg-end justify-content-md-end">
                  <div className="col-lg-3 col-md-4 col-4 mt-lg-0 mt-md-4 mt-0 footer-links-column order-md-first order-last">
                    <div className="ps-lg-3">
                      <ul className="nav flex-column footer-link-list flex_line1">
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Admission
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            About Us
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Careers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-4 mt-lg-0 mt-md-4 mt-0 footer-links-column order-md-first order-last">
                    <div className="ps-lg-3">
                      <ul className="nav flex-column footer-link-list flex_line1">
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Gallery
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Video Gallery
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Terms and Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-4 mt-lg-0 mt-md-4 mt-0 footer-links-column order-md-first order-last">
                    <div className="ps-lg-3">
                      <ul className="nav flex-column footer-link-list">
                        <li>
                          <a href="/" className="font-14">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="/" className="font-14">
                            FAQs
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="/" className="font-14">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr mb-0" />
          <div className="row">
            <div className="row justify-content-lg-end">
              <div className="pt-4">
                <div className="row responsive_footer">
                  <div className="col mx-md-1 pr-5 mt-lg-0 mt-4">
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2 text-center">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://cdnstatic.nextias.com/ibt_banner_images/5027014delhi_icon_%281%29.png"
                      />
                      <h5 className="mb-2">IAS GAON (Delhi)</h5>
                      <h6 className="mb-1">Old Rajendra Nagar</h6>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            27-B, Pusa Road, <br />
                            Metro Pillar no. 118, Near Karol Bagh Metro,
                            <br />
                            New Delhi-110060
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1">
                          <i className="fa fa-phone"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="tel:8081300200">8081300200</a>
                          </span>
                        </li>
                        <li className="position-relative d-flex flex-nowrap align-items-center">
                          <i className="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="/">
                              <span
                                className="__cf_email__"
                                data-cfemail="0b62656d644b656e737f626a7825686466"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col mx-md-1 mr-5 mt-lg-0 mt-4">
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2 text-center">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/838858776403535400_image.svg"
                      />
                      <h5 className="mb-2">IAS GAON (Delhi)</h5>
                      <h6 className="mb-1">Mukherjee Nagar</h6>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            1422, Main Mukherjee Nagar Road,
                            <br />
                            Near Batra Cinema,
                            <br />
                            New Delhi-110009
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1">
                          <i className="fa fa-phone"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="tel:9311667076">9311667076</a>
                          </span>
                        </li>
                        <li className="position-relative d-flex flex-nowrap text-center">
                          <i className="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="cdn-cgi/l/email-protection.html#20494e464f48494e4449604e4558544941530e434f4d">
                              <span
                                className="__cf_email__"
                                data-cfemail="056c6b636a6d6c6b616c456b607d716c64762b666a68"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col mx-md-1 mr-2 mt-lg-0 mt-4">
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2 text-center">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://cdnstatic.nextias.com/ibt_banner_images/3991666jaipur_icon_%281%29.png"
                      />
                      <h5 className="mb-2">IAS GAON (Jaipur)</h5>
                      <h6 className="mb-1">Rajasthan</h6>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            Plot No. A, New Rajeev Gandhi Nagar,
                            <br />
                            Kota, Rajasthan-324005
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1">
                          <i className="fa fa-phone"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="tel:9116147076">9116147076</a>
                          </span>
                        </li>
                        <li className="position-relative d-flex flex-nowrap text-center">
                          <i className="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="cdn-cgi/l/email-protection.html#20494e464f48494e4449604e4558544941530e434f4d">
                              <span
                                className="__cf_email__"
                                data-cfemail="056c6b636a6d6c6b616c456b607d716c64762b666a68"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col mx-md-1 ml-md-1 ml-4 mt-lg-0 mt-4">
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2 text-center">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/838858776403535400_image.svg"
                      />
                      <h5 className="mb-2">IAS GAON (Prayagraj)</h5>
                      <h6 className="mb-1">Uttar Pradesh</h6>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            Office No 101-102 1st Floor, Sky Hi Chambers,
                            <br />
                            11/5 Park Road, Hazratganj,
                            <br />
                            Lucknow-226001
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1">
                          <i className="fa fa-phone"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="tel:8920066066">8920066066</a>
                          </span>
                        </li>
                        <li className="position-relative d-flex flex-nowrap text-center">
                          <i className="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="cdn-cgi/l/email-protection.html#20494e464f48494e4449604e4558544941530e434f4d">
                              <span
                                className="__cf_email__"
                                data-cfemail="5e373038313637303a377e303b263a373f2d703d3133"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center py-3">
                  <div className="col-md-12 col-12 mt-3 mt-md-1">
                    <ul className="nav justify-content-md-center gap-3 items-center footer-icon-right">
                      <li className="mt-3" >
                        <a href="/" target="_blank">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li className="mt-3" >
                        <a href="/" target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li className="mt-3" >
                        <a href="/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="mt-3" >
                        <a href="/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="mt-3" >
                        <a href="/" target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="mt-3" >
                        <a href="/" target="_blank">
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center border-bottom">
              <span className="font-14">
                @copyright © 2024. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
