import React from "react";
import Aboutcomponent from "./Components/Aboutcomponent";

function About() {
  return (
    <>
      {/* start banner Area */}
      <section className="about-banner">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">About Me</h1>
              <p className="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span className="lnr lnr-arrow-right"></span>{" "}
                <a href="about.html"> About Me</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      <Aboutcomponent/>
    </>
  );
}
export default About;
