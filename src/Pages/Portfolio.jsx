import React from "react";
import Portfoliocomponent from "./Components/Portfoliocomponent";

function Portfolio() {
  return (
    <>
      {/* start banner Area */}
      <section className="about-banner">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Portfolio</h1>
              <p className="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span className="lnr lnr-arrow-right"></span>{" "}
                <a href="portfolio.html"> Portfolio</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      <Portfoliocomponent/>
   
    </>
  );
}

export default Portfolio;