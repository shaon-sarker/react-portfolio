import React, { useState } from "react";
import { serviceData } from "../Data/ServiceApi";
import { portfolio } from "../Data/PortfolioApi";
import { testimonialData } from "../Data/Testimonial";
import { pricelistData } from "../Data/Pricelist";

function Home() {
  const [services, setServices] = useState(serviceData);
  const [portfolios, setPortfolio] = useState(portfolio);
  const [testimonials, setTestimonial] = useState(testimonialData);
  const [pricelists, setPriceList] = useState(pricelistData);

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
              <h6>This is me</h6>
              <h1>Shaon Sarker</h1>
              <p>
                You will begin to realise why this exercise is called the
                Dickens Pattern with reference to the ghost showing Scrooge some
                different futures.
              </p>
              <a
                href="https://pdfhost.io/v/D.2Ar1Usj_shaon_cv.pdf"
                target="__blank"
                class="primary-btn text-uppercase"
              >
                Download CV
              </a>
            </div>
            <div class="col-lg-6 col-md-6 banner-right d-flex align-self-end">
              <img
                class="img-fluid"
                src="assets/images/about.png"
                alt="about me"
              />
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
        </div>
      </section>
      {/* <About/> */}

      {/* End home-about Area */}

      {/* Start services Area */}
      <section class="services-area section-gap">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content  col-lg-7">
              <div class="title text-center">
                <h1 class="mb-10">My Offered Services</h1>
                <p>
                  At about this time of year, some months after New Year’s
                  resolutions have been made and kept, or made and neglected.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {services.map((service) => {
              const { id, name, description } = service;
              return (
                <div class="col-lg-4 col-md-6">
                  <div class="single-services" key={id}>
                    <span class="lnr lnr-pie-chart"></span>
                    <a href="#">
                      <h4>{name}</h4>
                    </a>
                    <p>"{description}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End services Area */}

      {/* Start fact Area */}
      <section class="facts-area section-gap" id="facts-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 single-fact">
              <h1 class="counter">20</h1>
              <p>Projects Completed</p>
            </div>
            <div class="col-lg-3 col-md-6 single-fact">
              <h1 class="counter">20</h1>
              <p>Happy Clients</p>
            </div>
            <div class="col-lg-3 col-md-6 single-fact">
              <h1 class="counter">223</h1>
              <p>Cups of Coffee</p>
            </div>
            <div class="col-lg-3 col-md-6 single-fact">
              <h1 class="counter">25</h1>
              <p>Real Professionals</p>
            </div>
          </div>
        </div>
      </section>
      {/* end fact Area */}

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
              {portfolios.map((port) => {
                const { id, name, category, image, altname } = port;
                return (
                  <div class="single-portfolio col-sm-4 all vector" key={id}>
                    <div class="relative">
                      <div class="thumb">
                        <div class="overlay overlay-bg"></div>
                        <img
                          class="image img-fluid"
                          src={image}
                          alt={altname}
                        />
                      </div>
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

      {/* Start testimonial Area */}
      <section class="testimonial-area section-gap">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">Client’s Feedback About Me</h1>
                <p>
                  It is very easy to start smoking but it is an uphill task to
                  quit it. Ask any chain smoker or even a person.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="active-testimonial">
              {testimonials.map((testimonial) => {
                const { id, image, heading, describe, title, altname } =
                  testimonial;
                return (
                  <div class="single-testimonial item d-flex flex-row" key={id}>
                    <div class="thumb">
                      <img class="img-fluid" src={image} alt={altname} />
                    </div>
                    <div class="desc">
                      <p>{describe}</p>
                      <h4>{title}</h4>
                      <p>{heading}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial Area */}

      {/* Start price Area */}
      <section class="price-area section-gap">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">Choose Your Plan</h1>
                <p>
                  When someone does something that they know that they shouldn’t
                  do, did they.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {pricelists.map((pricelist) => {
              const {
                id,
                topheading,
                heading,
                describe,
                listone,
                listtwo,
                listthree,
                bottomheading,
              } = pricelist;
              return (
                <div class="col-lg-4 col-md-8 single-price">
                  <div class="top-part">
                    <h1 class="package-no">{topheading}</h1>
                    <h4>{heading}</h4>
                    <p class="mt-10">{describe}</p>
                  </div>
                  <div class="package-list">
                    <ul>
                      <li>{listone}</li>
                      <li>{listtwo}</li>
                      <li>{listthree}</li>
                    </ul>
                  </div>
                  <div class="bottom-part">
                    <h1>${bottomheading}</h1>
                    <a class="price-btn text-uppercase" href="#">
                      Buy Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End price Area */}
    </>
  );
}

export default Home;