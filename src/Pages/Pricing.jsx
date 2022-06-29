import React, { useState } from "react";
import Pricecomponent from "./Components/Pricecomponent";


function Pricing() {
  return (
    <>
      {/* start banner Area */}
      <section className="about-banner">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Pricing Plan</h1>
              <p className="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span className="lnr lnr-arrow-right"></span>{" "}
                <a href="price.html"> Pricing Plan</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}

     <Pricecomponent/>
    </>
  );
}

export default Pricing;