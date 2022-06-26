import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function About() {
  return (
    <>
      {/* start banner Area */}
      <section class="about-banner">
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">About Me</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>{" "}
                <a href="about.html"> About Me</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      {/* Start home-about Area */}
      <section class="home-about-area pt-120">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-md-6 home-about-left">
              <img
                class="img-fluid"
                src="assets/images/about/portfolio.svg"
                alt=""
              />
            </div>
            <div class="col-lg-5 col-md-6 home-about-right">
              <h6>About Me</h6>
              <h1 class="text-uppercase">Personal Details</h1>
              <p>
                Here, I focus on a range of items and features that we use in
                life without giving them a second thought. such as Coca Cola.
                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco.
              </p>
              <a
                href="https://pdfhost.io/v/D.2Ar1Usj_shaon_cv.pdf"
                target="__blank"
                class="primary-btn text-uppercase"
              >
                View Full Details
              </a>
            </div>
          </div>
          <div class="row skillbar-wraps">
            <div class="col-lg-6 skill-left">
              <div class="single-skill">
                <p>HTML5 85%</p>
                <ProgressBar animated now={85} />
              </div>
              <div class="single-skill">
                <p>CSS3 90%</p>
                <ProgressBar animated now={90} />
              </div>
              <div class="single-skill">
                <p>BOOTSTRAP 80%</p>
                <ProgressBar animated now={80} />
              </div>
              <div class="single-skill">
                <p>PHP 90%</p>
                <ProgressBar animated now={90} />
              </div>
            </div>
            <div class="col-lg-6 skill-right">
              <div class="single-skill">
                <p>VS CODE 95%</p>
                <ProgressBar animated now={95} />
              </div>
              <div class="single-skill">
                <p>JAVASCRIPT 50%</p>
                <ProgressBar animated now={50} />
              </div>
              <div class="single-skill">
                <p>JQUERY 85%</p>
                <ProgressBar animated now={85} />
              </div>
              <div class="single-skill">
                <p>SQL/MYSQL 80%</p>
                <ProgressBar animated now={80} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End home-about Area */}
    </>
  );
}
export default About;
