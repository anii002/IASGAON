/* eslint-disable jsx-a11y/anchor-is-valid */
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row contact-head">
          <div className="col-lg-12">
            <h1 className="mb-1 text-uppercase">Contact-Us</h1>
          </div>
        </div>
        <div className="contact-main row p-5">
          <div className="col-lg-5 col-sm-12">
            <div className="contact-content d-flex flex-column justify-content-center items-center">
              <h2 className="text-uppercase mb-5">Keep In Touch With Us</h2>

              <ul className="list-wrap">
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">
                    <a>
                      68 Street Holakt Street world <br /> 10002 New York
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="content">
                    <a href="tel:0123456789">+123 555 69090</a>
                    <br />
                    <a href="tel:0123456789">+123 555 69090</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content">
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                    <br />
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7 col-sm-12">
            <div className="contact-box">
              <form className="form">
                <h3 className="text-uppercase ">Get in touch</h3>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="box-content"
                      name="name"
                      type="text"
                      placeholder="Name *"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="box-content "
                      name="email"
                      type="email"
                      placeholder="E-mail *"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="box-content"
                      name="phone"
                      type="number"
                      placeholder="Phone *"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="box-content"
                      name="subject"
                      type="text"
                      placeholder="Your Subject *"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      id="textarea"
                      name="message"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button id="btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
