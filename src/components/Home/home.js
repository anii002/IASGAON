/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css";
import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-container">
      <section className="mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://cdn.visionias.in/misc/6dkvmj3cjm71721378692.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://cdnstatic.nextias.com/ibt_banner_images/1707331Optional%20advance%20course%20mains%202024-.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://cdnstatic.nextias.com/ibt_banner_images/4825346Mains%20Test%20Series%20for%20CSE%202024.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
        <div className="container resources-section">
          <h2>VALUABLE RESOURCES</h2>
          <div className="row resources-main ">
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-newspaper"></i>
                <p>CURRENT AFFAIRS</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-lightbulb"></i>
                <p>SMART QUIZ</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-book"></i>
                <p>QUICK REVISION MATERIAL</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-chart-pie"></i>
                <p>INFOGRAPHICS</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-broadcast-tower"></i>
                <p>AIR NEWS ANALYSIS</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-file-alt"></i>
                <p>UPSC PAPER SOLUTION</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-user-tie"></i>
                <p>TALKS AND INTERVIEWS</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-book-reader"></i>
                <p>TOPPERS ANSWER COPY</p>
              </a>
            </div>
            <div className="resources-box col-md-4 position-relative overflow-hidden  border  rounded-4  shadow-lg">
              <img
                className="img-fluid"
                src="https://demo.htmlcodex.com/1427/online-courses-html-template/img/cat-1.jpg"
                alt="abc"
              />
              <a
                className="cat-overlay text-white text-decoration-none"
                href="#"
              >
                <i className="fas fa-search"></i>
                <p>RESEARCH AND ANALYSIS</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div class="container programs-section">
          <h2>OUR PROGRAMS</h2>
          <div class="d-flex flex-wrap justify-content-around">
            <button class="btn btn-outline-danger">CLASSROOM</button>
            <button class="btn btn-outline-danger">MOCK TEST SERIES</button>
            <button class="btn btn-outline-danger">PROBLEMS TEST SERIES</button>
            <button class="btn btn-outline-danger">INTERVIEWS</button>
            <button class="btn btn-outline-danger">MATERIAL</button>
          </div>
        </div>
        <div class="full-screen-image"></div>
      </section>
      <section className="mb-2">
        <div class="container team-section">
          <h2>Our Team</h2>
          <div class="row">
            <div class="col-md-3 team-member">
              <img src="https://via.placeholder.com/150" alt="Teacher Image" />
              <h5>Akhilesh jha</h5>
              <p>Physics</p>
            </div>
            <div class="col-md-3 team-member">
              <img src="https://via.placeholder.com/150" alt="Teacher Image" />
              <h5>Manmendra kumar</h5>
              <p>Philosophy</p>
            </div>
            <div class="col-md-3 team-member">
              <img src="https://via.placeholder.com/150" alt="Teacher Image" />
              <h5>Dr. B. R. Ambedkar</h5>
              <p>Law</p>
            </div>
            <div class="col-md-3 team-member">
              <img src="https://via.placeholder.com/150" alt="Teacher Image" />
              <h5>Arbaj Alam</h5>
              <p>Physics</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div class="container upsc-section">
          <div class="row">
            <div class="col">
              <h2>About UPSC Civil Services Examination (UPSC CSE)</h2>
              <p>
                The UPSC Civil Services Examination (CSE) is one of India's most
                prestigious tests, aimed at selecting candidates for diverse
                civil services roles such as IAS, IPS, and IFS. Administered
                annually by the UPSC, this examination is known for its rigorous
                selection procedure, encompassing Prelims, Mains, and a
                Personality Test/Interview.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Achieving Success with VisionIAS</h2>
              <p>
                Through its diverse range of initiatives and services, VisionIAS
                offers a holistic guidance and preparation platform for civil
                services aspirants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
