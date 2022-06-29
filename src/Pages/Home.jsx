import React, { useState } from "react";
import Servicecomponent from "./Components/Servicecomponent";
import Pricecomponent from "./Components/Pricecomponent";
import Testimonialcomponent from "./Components/Testimonialcomponent";
import { portfolio } from "../Data/PortfolioApi";
import { Fade, Zoom } from "react-reveal";

function Home() {
  const [portfolios, setPortfolio] = useState(portfolio);

  const filterItem = (category) => {
    const updateList = portfolio.filter((curElem) => {
      return curElem.category === category;
    });
    setPortfolio(updateList);
  };
  return (
    <>
      {/* start banner Area */}
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
              <Fade left>
                <h6>This is me</h6>
                <h1>Shaon Sarker</h1>
                <p>
                  You will begin to realise why this exercise is called the
                  Dickens Pattern with reference to the ghost showing Scrooge
                  some different futures.
                </p>
              </Fade>
              <a
                href="https://pdfhost.io/v/D.2Ar1Usj_shaon_cv.pdf"
                target="__blank"
                className="primary-btn text-uppercase"
              >
                Download CV
              </a>
            </div>
            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
              <img
                className="img-fluid"
                src="assets/images/about.png"
                alt="about me"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end banner Area */}

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
                className="primary-btn text-uppercase"
              >
                View Full Details
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End home-about Area */}

      <Servicecomponent />

      {/* Start portfolio-area Area */}
      <section className="portfolio-area section-gap" id="portfolio">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Our Latest Featured Projects</h1>
                <p>
                  Here are some demos, click on the{" "}
                  <a href="https://github.com/shaon-sarker">
                    <b>Github</b>
                  </a>
                  to see the whole.
                </p>
              </div>
            </div>
          </div>
          <div className="filters">
            <ul>
              <li
                className="active"
                data-filter="*"
                onClick={() => setPortfolio(portfolio)}
              >
                All
              </li>
              <li data-filter=".vector" onClick={() => filterItem("WebDesign")}>
                Website Design
              </li>
              <li
                data-filter=".raster"
                onClick={() => filterItem("Javascript")}
              >
                Javascript Work
              </li>
              <li data-filter=".ui" onClick={() => filterItem("wordpress")}>
                Wordpress
              </li>
              <li
                data-filter=".printing"
                onClick={() => filterItem("webdevelopment")}
              >
                Web Development
              </li>
            </ul>
          </div>
          <div className="filters-content">
            <div className="row">
              {portfolios.slice(0, 6).map((port) => {
                const { id, name, category, image, altname } = port;
                return (
                  <div className="single-portfolio col-sm-4 all vector" key={id}>
                    <div className="relative">
                      <Zoom>
                        <div className="thumb">
                          <div className="overlay overlay-bg"></div>
                          <img
                            className="image img-fluid"
                            src={image}
                            alt={altname}
                          />
                        </div>
                      </Zoom>
                    </div>
                    <div className="p-inner">
                      <h4>{name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End portfolio-area Area */}
      <Testimonialcomponent />
      <Pricecomponent />
    </>
  );
}

export default Home;