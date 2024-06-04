import React from 'react'
import './About.css'
import img1 from "../../../public/images/Lakhan Singh _ Portfolio_files/aboutImg.png";

function About() {
  return (
    <>
      <div className="container-fluid About-con">
        <div className="row">
          <div className="col-md-7">
            <div>
              <h1 className="about-h1">
                Know Who <span className="span-1">I'M</span>
              </h1>
              <p className="about-fitst-p">
                Know Who I'M Hi Everyone, I am
                <span className="span-1"> Lakhan Singh Rathore</span> from
                <span className="span-1"> Jaipur, Rajasthan.</span> I completed
                BCA with a specialization in Web Development and Computing at
                Agarwal P.G College Jaipur. My coursework focuses on developing
                skills in both theoretical and practical aspects of computer
                science, including programming, data structures, algorithms,
                calculus, linear algebra, and discrete mathematics.
              </p>
              <p className="about-second-p">
                Apart from coding, some other activities that I love to do!
              </p>
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

export default About