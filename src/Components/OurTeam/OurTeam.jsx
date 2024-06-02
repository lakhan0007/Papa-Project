import React from "react";
import "./OurTeam.css";
import PapaImg from "../../../public/images/WhatsApp.jpg";
import yash from "../../../public/images/lalabhediya.jpg";
import akku from "../../../public/images/akkudarling.jpg";

function OurTeam() {
  return (
    <>
      <section className="our-webcoderskull padding-lg">
        <div className="container">
          <div className="row heading heading-icon">
            <h2>Experienced & Professional Team</h2>
            <h6>
              "You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time"
            </h6>
          </div>
          <ul className="row">
            <li className="col-12 col-md-6 col-lg-3">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px" }}
              >
                <figure>
                  <img src={PapaImg} className="img-responsive" alt="" />
                </figure>
                <h3>
                  <a href="">Lakhan Singh</a>
                </h3>
                <p>Mern Satck developer</p>
                <div class="footer-social-icon">
                  <a href="#">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram insta-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-6 col-lg-3">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px" }}
              >
                <figure>
                  <img src={yash} className="img-responsive" alt="" />
                </figure>
                <h3>
                  <a href="#">Yash Mehra</a>
                </h3>
                <p>Content writter</p>
                <div class="footer-social-icon">
                  <a href="#">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram insta-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-6 col-lg-3">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px" }}
              >
                <figure>
                  <img src={akku} className="img-responsive" alt="" />
                </figure>
                <h3>
                  <a href="http://www.webcoderskull.com/">Akash Kothari</a>
                </h3>
                <p>Nalla berojgar Chapri</p>
                <div class="footer-social-icon">
                  <a href="#">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram insta-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="col-12 col-md-6 col-lg-3">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px" }}
              >
                <figure>
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
                    className="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  <a href="http://www.webcoderskull.com/">mark zuckerberg</a>
                </h3>
                <p>Chapdasi</p>
                <div class="footer-social-icon">
                  <a href="#">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram insta-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default OurTeam;
