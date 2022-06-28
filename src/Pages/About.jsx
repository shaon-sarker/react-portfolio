import React from "react";
import Aboutcomponent from "./Components/Aboutcomponent";

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
      <Aboutcomponent/>
    </>
  );
}
export default About;
