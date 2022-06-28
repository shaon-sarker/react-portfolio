import React, { useState } from "react";
import { Zoom } from "react-reveal";
import { pricelistData } from "../../Data/Pricelist";

function Pricecomponent() {
  const [pricelists, setPriceList] = useState(pricelistData);
  return (
    <>
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
                  <Zoom>
                    <div class="top-part">
                      <h1 class="package-no">{topheading}</h1>
                      <h4>{heading}</h4>
                      <p class="mt-10">{describe}</p>
                    </div>
                  </Zoom>
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

export default Pricecomponent;