import React, { useState } from "react";
import Pricecomponent from "./Components/Pricecomponent";


function Pricing() {
  return (
    <>
      {/* start banner Area */}
      <section class="about-banner">
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Pricing Plan</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right"></span>{" "}
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