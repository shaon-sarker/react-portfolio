import React, { useState } from "react";
import { Roll } from "react-reveal";
import { serviceData } from "../../Data/ServiceApi";
import CountUp from "react-countup";

function Servicecomponent() {
  const [services, setServices] = useState(serviceData);
  return (
    <>
      {/* Start services Area */}
      <section className="services-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content  col-lg-7">
              <div className="title text-center">
                <h1 className="mb-10">My Offered Services</h1>
                <p>
                  At about this time of year, some months after New Year’s
                  resolutions have been made and kept, or made and neglected.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service) => {
              const { id, name, description } = service;
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-services" key={id}>
                    <span className="lnr lnr-pie-chart"></span>
                    <Roll right>
                      <h4>{name}</h4>
                      <p>"{description}"</p>
                    </Roll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End services Area */}

      {/* Start fact Area */}
      <section className="facts-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 single-fact">
              <h1>
                <CountUp end={20} duration={5} />
              </h1>
              <p>Projects Completed</p>
            </div>
            <div className="col-lg-3 col-md-6 single-fact">
              <h1>
                <CountUp end={20} duration={5} />
              </h1>
              <p>Happy Clients</p>
            </div>
            <div className="col-lg-3 col-md-6 single-fact">
              <h1>
                <CountUp end={223} duration={5} />
              </h1>
              <p>Cups of Coffee</p>
            </div>
            <div className="col-lg-3 col-md-6 single-fact">
              <h1>
                <CountUp end={10} duration={5} />
              </h1>
              <p>Real Professionals</p>
            </div>
          </div>
        </div>
      </section>
      {/* end fact Area */}
    </>
  );
}

export default Servicecomponent;