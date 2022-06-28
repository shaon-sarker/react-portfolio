import React from "react";
import Servicecomponent from "./Components/Servicecomponent";
import Pricecomponent from "./Components/Pricecomponent";

function Services() {
  return (
    <>
      {/* start banner Area */}
      <section class="about-banner">
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Services</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>{" "}
                <a href="services.html"> Services</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      <Servicecomponent/>
      <Pricecomponent/>
    </>
  );
}

export default Services;