import React, { useState } from 'react';
import { Fade, Zoom } from 'react-reveal';
import { portfolio } from '../../Data/PortfolioApi';

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
        </>
     );
}

export default Portfoliocomponent;