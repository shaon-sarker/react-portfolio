import React from "react";
import Servicecomponent from "./Components/Servicecomponent";
import Pricecomponent from "./Components/Pricecomponent";

function Services() {
  return (
    <>
      {/* start banner Area */}
      <section className="about-banner">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Services</h1>
              <p className="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span className="lnr lnr-arrow-right"></span>{" "}
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