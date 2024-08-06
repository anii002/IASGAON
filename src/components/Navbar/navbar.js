import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
       <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-box">
            <p className="mb-3">
              <i>
                Next Generation Institute for UPSC Civil Services Examination Preparation.
              </i>
            </p>
          </div>
          <div className="marquee-box">
            <p className="mb-3">
              <i>Explore our specialized programs and training resources.</i>
            </p>
          </div>
          <div className="marquee-box">
            <p className="mb-3">
              <i>Join us for expert guidance and support.</i>
            </p>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "scrolled" : "navbar-light bg-light"
        } shadow`}
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" className="navbar-logo img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-content d-flex flex-column align-items-end w-100">
              <div className="navbar-icons mb-2 d-lg-flex d-none">
                <a href="tel:080-6220-6330">
                  <i className="fa fa-phone"></i> 080-6220-6330
                </a>
                <a href="/">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="/">
                  <i className="fas fa-question-circle"></i>
                </a>
              </div>
              <ul className="navbar-nav w-100 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/about-us">
                    <a className="nav-link" href="/">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us">
                    <a className="nav-link" href="/">
                      Contact
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Admission
                  </a>
                </li>
                <li className="nav-item">
                <Link to="/our-programs">
                  <a className="nav-link" href="/">
                    Our programs
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Non Academic learning
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Academic Study material
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link truncate-container  text-truncate-custom"
                    href="/"
                  >
                    About UPSC Civil Services Examination and State pcs exam
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-danger btn-sm" href="/">
                    Student login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-icons d-lg-none">
            <a href="tel:080-6220-6330">
              <i className="fa fa-phone"></i> 080-6220-6330
            </a>
            <a href="/">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="/">
              <i className="fas fa-question-circle"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
