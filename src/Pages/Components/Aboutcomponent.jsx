import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Fade } from "react-reveal";

function Aboutcomponent() {
  return (
    <>
      {/* Start home-about Area */}
      <section className="home-about-area pt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 home-about-left">
              <img
                className="img-fluid"
                src="assets/images/about/portfolio.svg"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-md-6 home-about-right">
              <Fade right>
                <h6>About Me</h6>
                <h1 className="text-uppercase">Personal Details</h1>
                <p>
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought. such as Coca Cola.
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Fade>
              <a
                href="https://pdfhost.io/v/D.2Ar1Usj_shaon_cv.pdf"
                target="__blank"
                class="primary-btn text-uppercase"
              >
                View Full Details
              </a>
            </div>
          </div>
          <div className="row skillbar-wraps">
            <div className="col-lg-6 skill-left">
              <div className="single-skill">
                <p>HTML5 85%</p>
                <ProgressBar animated now={85} />
              </div>
              <div className="single-skill">
                <p>CSS3 90%</p>
                <ProgressBar animated now={90} />
              </div>
              <div className="single-skill">
                <p>BOOTSTRAP 80%</p>
                <ProgressBar animated now={80} />
              </div>
              <div className="single-skill">
                <p>PHP 90%</p>
                <ProgressBar animated now={90} />
              </div>
            </div>
            <div className="col-lg-6 skill-right">
              <div className="single-skill">
                <p>VS CODE 95%</p>
                <ProgressBar animated now={95} />
              </div>
              <div className="single-skill">
                <p>JAVASCRIPT 50%</p>
                <ProgressBar animated now={50} />
              </div>
              <div className="single-skill">
                <p>JQUERY 85%</p>
                <ProgressBar animated now={85} />
              </div>
              <div className="single-skill">
                <p>SQL/MYSQL 80%</p>
                <ProgressBar animated now={80} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* End home-about Area */}
    </>
  );
}

export default Aboutcomponent;
