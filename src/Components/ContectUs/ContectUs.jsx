import React from "react";
import "./ContectUs.css";

function ContactUs() {
  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="main-contect">
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <div className="contect-find">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>
                      304, near bus stand jaisingh <br /> pura khor , jaipur
                    </span>
                  </div>
                </div>
              </div>
              <div className="contect-call">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>+91 9829010875</span>
                  </div>
                </div>
              </div>
              <div className="contect-email">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>lakhansingh2001@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 form-design mb-5 ">
              <h1 className="contect-head">Let’s work together!</h1>
              <p className="contect-para">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <form
                  className="contect_form"
                  autocomplete="off"
                  onSubmit={handlerSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="contect_input"
                        name="name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="contect_input"
                        name="name"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="contect_input"
                        name="email"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="contect_input"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <textarea
                    name="message"
                    className="contect_text_area"
                    placeholder="Message"
                  ></textarea>

                  <div className="text-center">
                    <input
                      type="submit"
                      style={{ marginBottom: "50px" }}
                      className="btn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
