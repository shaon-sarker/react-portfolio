import React, { useState } from "react";
import { Zoom } from "react-reveal";
import { portfolio } from "../../Data/PortfolioApi";

function Portfoliocomponent() {
  const [portfolios, setPortfolio] = useState(portfolio);

  const filterItem = (category) => {
    const updateList = portfolio.filter((curElem) => {
      return curElem.category === category;
    });
    setPortfolio(updateList);
  };
  return (
    <>
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
              {portfolios.map((port) => {
                const { id, name, category, image, altname } = port;
                return (
                  <div className="single-portfolio col-sm-4 all vector" key={id}>
                    <div className="relative">
                      <Zoom>
                        <div className="thumb">
                          <div className="overlay overlay-bg"></div>
                          <img
                            class="image img-fluid"
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
    </>
  );
}

export default Portfoliocomponent;
