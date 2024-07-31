import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure this line is present

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="brand-text">VAJIRAM</span>
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            className="navbar-logo"
          />
          <span className="brand-text">RAVI</span>
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
              <a href="tel:080-6220-6330"><i className="fa fa-phone"></i> 080-6220-6330</a>
              <a href="/"><i className="fab fa-whatsapp"></i></a>
              <a href="/"><i className="fab fa-facebook"></i></a>
              <a href="/"><i className="fab fa-youtube"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-telegram"></i></a>
              <a href="/"><i className="fas fa-question-circle"></i></a>
            </div>
            <ul className="navbar-nav w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  General Studies
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Programmes
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Toppers
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Study Material
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Postal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-icons d-lg-none">
          <a href="tel:080-6220-6330"><i className="fa fa-phone"></i> 080-6220-6330</a>
          <a href="/"><i className="fab fa-whatsapp"></i></a>
          <a href="/"><i className="fab fa-facebook"></i></a>
          <a href="/"><i className="fab fa-youtube"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-telegram"></i></a>
          <a href="/"><i className="fas fa-question-circle"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
