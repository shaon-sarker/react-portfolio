import React, { useState } from "react";
import { Zoom } from "react-reveal";
import { pricelistData } from "../../Data/Pricelist";

function Pricecomponent() {
  const [pricelists, setPriceList] = useState(pricelistData);
  return (
    <>
      {/* Start price Area */}
      <section className="price-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Choose Your Plan</h1>
                <p>
                  When someone does something that they know that they shouldn’t
                  do, did they.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
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
                <div className="col-lg-4 col-md-8 single-price">
                  <Zoom>
                    <div className="top-part">
                      <h1 className="package-no">{topheading}</h1>
                      <h4>{heading}</h4>
                      <p className="mt-10">{describe}</p>
                    </div>
                  </Zoom>
                  <div className="package-list">
                    <ul>
                      <li>{listone}</li>
                      <li>{listtwo}</li>
                      <li>{listthree}</li>
                    </ul>
                  </div>
                  <div className="bottom-part">
                    <h1>${bottomheading}</h1>
                    <a className="price-btn text-uppercase" href="#">
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