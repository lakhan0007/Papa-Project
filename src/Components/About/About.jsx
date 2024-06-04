import React from "react";
import "./About.css";
import img1 from "../../../public/images/Lakhan Singh _ Portfolio_files/aboutImg.png";

function About() {
  return (
    <>
      <div className="container-fluid About-con">
        <div className="row">
          <div className="col-md-7">
            <div>
              <h1 className="about-myself">
                LET ME <span className="span-2">INTRODUCE </span> MYSELF
              </h1>
              <p className="myself-p1">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
              </p>
              <p className="myself-p2">
                I am fluent in classics like
                <span className="myself-span"> HTML , CSS and Javascript</span>
              </p>
              <p className="myself-p3">
                My field of Interest's are building new
                <span className="myself-span">
                  Web Technologies and Products
                </span>
                and also in areas related to
                <span className="myself-span">
                  Deep Learning and Natural Launguage Processing.
                </span>
              </p>
              <p className="myself-p3">
                Whenever possible, I also apply my passion for developing
                products with<span className="myself-span">Node.js</span> and
                like
                <span className="myself-span">React.js</span>
              </p>
              <h1 className="about-h1">
                Know Who <span className="about-span-1">I'M</span>
              </h1>
              <p className="about-fitst-p">
                Know Who I'M Hi Everyone, I am
                <span className="about-span-1"> Lakhan Singh Rathore</span> from
                <span className="about-span-1"> Jaipur, Rajasthan.</span> I completed
                BCA with a specialization in Web Development and Computing at
                Agarwal P.G College Jaipur. My coursework focuses on developing
                skills in both theoretical and practical aspects of computer
                science, including programming, data structures, algorithms,
                calculus, linear algebra, and discrete mathematics.
              </p>
              {/* <p className="about-second-p">
                Apart from coding, some other activities that I love to do!
              </p> */}
            </div>
          </div>
          <div className="col-md-5 about-img">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
