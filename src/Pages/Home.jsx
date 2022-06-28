import React, { useState } from "react";
import Servicecomponent from "./Components/Servicecomponent";
import Pricecomponent from "./Components/Pricecomponent";
import Testimonialcomponent from "./Components/Testimonialcomponent";
import { portfolio } from "../Data/PortfolioApi";
import { Bounce, Fade, Zoom } from "react-reveal";
// import Certificatecomponent from "./Components/Certificatecomponent";

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
      <section class="banner-area">
        <div class="container">
          <div class="row fullscreen align-items-center justify-content-between">
            <div class="col-lg-6 col-md-6 banner-left">
              <Fade left>
              <h6>This is me</h6>
              <h1>Shaon Sarker</h1>
              <p>
                You will begin to realise why this exercise is called the
                Dickens Pattern with reference to the ghost showing Scrooge some
                different futures.
              </p>
              </Fade>
              <a
                href="https://pdfhost.io/v/D.2Ar1Usj_shaon_cv.pdf"
                target="__blank"
                class="primary-btn text-uppercase"
               >Download CV</a>
           
              
            </div>
          
            <div class="col-lg-6 col-md-6 banner-right d-flex align-self-end">
            <Bounce>
              <img
                class="img-fluid"
                src="assets/images/about.png"
                alt="about me"
              />
                  </Bounce>
            </div>
          </div>
        </div>
      </section>
      {/* end banner Area */}

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
              <Fade right>
              <h6>About Me</h6>
              <h1 class="text-uppercase">Personal Details</h1>
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
        </div>
      </section>
      {/* End home-about Area */}
      
      <Servicecomponent/>

       {/* Start portfolio-area Area */}
       <section class="portfolio-area section-gap" id="portfolio">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">Our Latest Featured Projects</h1>
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
          <div class="filters">
            <ul>
              <li
                class="active"
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
          <div class="filters-content">
            <div class="row">
              {portfolios.slice(0,6).map((port) => {
                const { id, name, category, image, altname } = port;
                return (
                  <div class="single-portfolio col-sm-4 all vector" key={id}>
                    <div class="relative">
                    <Zoom>
                      <div class="thumb">
                        <div class="overlay overlay-bg"></div>
                        <img
                          class="image img-fluid"
                          src={image}
                          alt={altname}
                        />
                      </div>
                      </Zoom>
                    </div>
                    <div class="p-inner">
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
      <Testimonialcomponent/>
      <Pricecomponent/>
      {/* <Certificatecomponent/> */}
    </>
  );
}

export default Home;