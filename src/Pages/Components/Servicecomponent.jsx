import React, { useState } from 'react';
import { Roll } from 'react-reveal';
import { serviceData } from '../../Data/ServiceApi';
import CountUp from 'react-countup';

function Servicecomponent() {
    const [services, setServices] = useState(serviceData);
    return ( 
        <>
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
          <section class="facts-area section-gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 single-fact">
             <h1><CountUp end={20} duration={2}/></h1> 
              <p>Projects Completed</p>
            </div>
            <div class="col-lg-3 col-md-6 single-fact">
              <h1><CountUp end={20} duration={2}/></h1>
              <p>Happy Clients</p>
            </div>
            <div class="col-lg-3 col-md-6 single-fact">
              <h1><CountUp end={223} duration={2}/></h1>
              <p>Cups of Coffee</p>
            </div>
            <div class="col-lg-3 col-md-6 single-fact">
              <h1><CountUp end={10} duration={2}/></h1>
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