/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import logo from "../../assets/logo.jpg";
const Footer = () => {
  return (
    <div className="footer-section py-3">
      <footer id="footer" className="footer bg-light-dark web pt-5">
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
                  />
                  <p className="font-14 text-heading">
                    Next Generation Institute for UPSC Civil Services
                    Examination Preparation.
                  </p>
                </div>
                {/* <div className="col-lg-12 col-md-12">
                  <ul className="nav mt-md-2 mt-1 pt-2">
                    <li className="me-1">
                      <a href="#" target="_blank">
                        <img
                          width="110"
                          height="31"
                          alt="play-store"
                          className="img-fluid mb-lg-0 mb-md-0 mb-3"
                        />
                      </a>
                    </li>
                    <li className="me-1">
                      <a href="#" target="_blank">
                        <img
                          width="110"
                          height="31"
                          alt="apple-store"
                          className="img-fluid mb-lg-0 mb-md-0 mb-3"
                        />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-12 mt-3 mt-md-0">
              <div className="row mt-md-4 mt-0">
                <div className="row justify-content-lg-end justify-content-md-end">
                  <div className="col-lg-3 col-md-4 col-4 mt-lg-0 mt-md-4 mt-0 footer-links-column order-md-first order-last">
                    <div className="ps-lg-3">
                      <ul className="nav flex-column footer-link-list flex_line1">
                        <li className="mb-1">
                          <a href="#" className="font-14">
                            Admission
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#" className="font-14">
                            About Us
                          </a>
                        </li>
                        {/* <li className="mb-1">
                                        <a
                                          href="about-cse.html"
                                          className="font-14"
                                        >
                                          About CSE
                                        </a>
                                      </li> */}
                        {/* <li className="mb-1">
                                        <a
                                          href="faculty-panel.html"
                                          className="font-14"
                                        >
                                          Faculty Panel
                                        </a>
                                      </li> */}
                        <li className="mb-1">
                          <a href="#" className="font-14">
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
                          <a href="#" className="font-14">
                            Gallery
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#" className="font-14">
                            Video Gallery
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#" className="font-14">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#" className="font-14">
                            Terms and Conditions
                          </a>
                        </li>
                        {/* <li className="mb-1">
                                        <a
                                          target="_blank"
                                          href="blog/index.html"
                                          className="font-14"
                                        >
                                          Blog
                                        </a>
                                      </li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-4 mt-lg-0 mt-md-4 mt-0 footer-links-column order-md-first order-last">
                    <div className="ps-lg-3">
                      <ul className="nav flex-column footer-link-list">
                        {/* <li>
                                        <a
                                          target="_blank"
                                          href="upsc-cse-posts.html"
                                          className="font-14"
                                        >
                                          UPSC CSE Posts
                                        </a>
                                      </li> */}
                        <li>
                          <a href="#" className="font-14">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="#" className="font-14">
                            FAQs
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#" className="font-14">
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
              <div className="py-4">
                <div className="row responsive_footer">
                  <div className="col mx-md-1 pr-5 mt-lg-0 mt-4">
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://cdnstatic.nextias.com/ibt_banner_images/5027014delhi_icon_%281%29.png"
                      />
                      <h5 className="mb-2">IAS GAON (Delhi)</h5>
                      <h6 className="mb-1">Old Rajinder Nagar</h6>
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
                          <i class="fa fa-envelope"></i>

                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="#">
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
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2">
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
                        <li className="position-relative d-flex flex-nowrap align-items-center">
                          <i class="fa fa-envelope"></i>
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
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://cdnstatic.nextias.com/ibt_banner_images/3991666jaipur_icon_%281%29.png"
                      />
                      <h5 className="mb-3">IAS GAON (Jaipur)</h5>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            IAS GAON - Plot No - 6 &amp; 7, 3rd Floor,
                            <br />
                            Sree Gopal Nagar, Gopalpura Bypass,
                            <br />
                            Above Zudio Showroom
                            <br />
                            Jaipur (Rajasthan) - 302015
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1 d-flex">
                          <i className="fa fa-phone"></i>
                          <div className="">
                            <span className="footer-text font-14 ms-1 mr_sp text-nowrap">
                              <a href="tel:9358200511">9358200511</a>
                            </span>
                          </div>
                        </li>
                        <li className="position-relative d-flex flex-nowrap align-items-center">
                          <i class="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="cdn-cgi/l/email-protection.html#523b3c343d38333b222720123c372a263b33217c313d3f">
                              <span
                                className="__cf_email__"
                                data-cfemail="056c6b636a6f646c757077456b607d716c64762b666a68"
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
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/838858776403535400_image.svg"
                      />
                      <h5 className="mb-3">IAS GAON (Prayagraj)</h5>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            31/31, Sardar Patel Marg <br />
                            Civil Lines, Prayagraj,
                            <br />
                            Uttar Pradesh - 211001
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1">
                          <i className="fa fa-phone"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="tel:9958857757">9958857757</a>
                          </span>
                        </li>
                        <li className="position-relative d-flex flex-nowrap align-items-center">
                          <i class="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="cdn-cgi/l/email-protection.html#442d2a222b3436253d252336252e042a213c302d25376a272b29">
                              <span
                                className="__cf_email__"
                                data-cfemail="c5acaba3aab5b7a4bca4a2b7a4af85aba0bdb1aca4b6eba6aaa8"
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
                    <div className="border-lg-start ps-lg-3 ps-md-0 ps-2">
                      <img
                        width="48"
                        height="48"
                        alt="delhi_icon"
                        src="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/838858776403535400_image.svg"
                      />
                      <h5 className="mb-3">IAS GAON (Bhopal)</h5>
                      <ul className="nav flex-column">
                        <li className="position-relative">
                          <span className="footer-text font-14">
                            Plot No. 46 <br />
                            Zone - 2 M.P Nagar
                            <br />
                            Bhopal - 462011
                          </span>
                        </li>
                        <li className="position-relative mt-1 mb-1 d-flex">
                          <i className="fa fa-phone"></i>
                          <div className="">
                            <span className="footer-text font-14 ms-1 mr_sp text-nowrap">
                              <a href="tel:8827664612">8827664612</a>
                              <span>,</span>
                            </span>
                            <br />
                            <span className="footer-text font-14 ms-1 mr_sp">
                              <a href="tel:8081300200">8081300200</a>
                            </span>
                          </div>
                        </li>
                        <li className="position-relative d-flex flex-nowrap align-items-center">
                          <i class="fa fa-envelope"></i>
                          <span className="footer-text font-14 ms-1 mr_sp">
                            <a href="cdn-cgi/l/email-protection.html#bbd2d5ddd4d9d3d4cbdad7fbd5dec3cfd2dac895d8d4d6">
                              <span
                                className="__cf_email__"
                                data-cfemail="2d44434b424f45425d4c416d43485559444c5e034e4240"
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
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center py-3">
            <div className="col-md-6 col-12">
              <p className="mb-0 font-14 ps-3 ps-md-0 text-heading txn_lft">
                © 2024 IAS GAON - All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 col-12 mt-3 mt-md-0">
              <ul className="nav justify-content-md-end footer-icon-right">
                <li className="me-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" target="_blank">
                    <i className="fab fa-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
