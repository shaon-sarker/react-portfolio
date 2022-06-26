import Reactc,{ useState } from 'react';
import { serviceData } from '../Data/ServiceApi';
import { pricelistData } from '../Data/Pricelist';

function Services() {
    const [services,setServices] = useState(serviceData);
    const [pricelists,setPriceList] = useState(pricelistData);
    return ( 
        <>
        {/* start banner Area */}
      <section class="about-banner">
         <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
               <div class="about-content col-lg-12">
                  <h1 class="text-white">
                     Services
                  </h1>
                  <p class="text-white link-nav"><a href="index.html">Home </a> <span
                     class="lnr lnr-arrow-right"></span> <a href="services.html"> Services</a></p>
               </div>
            </div>
         </div>
      </section>
      {/* End banner Area */}
         {/* Start services Area */}
         <section class="services-area section-gap">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="menu-content  col-lg-7">
                    <div class="title text-center">
                        <h1 class="mb-10">My Offered Services</h1>
                        <p>At about this time of year, some months after New Year’s resolutions have been made and kept,
                            or made and neglected.
                        </p>
                    </div>
                    </div>
                </div>
                <div class="row">
                    {services.map((service)=>{
                        const {id,name,description} = service;
                        return(
                        <div class="col-lg-4 col-md-6">
                            <div class="single-services" key={id}>
                                <span class="lnr lnr-pie-chart"></span>
                                <a href="#">
                                    <h4>{name}</h4>
                                </a>
                                <p>
                                    "{description}"
                                </p>
                            </div>
                        </div>
                        )
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
         {/* Start price Area */}
   <section class="price-area section-gap">
      <div class="container">
         <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
               <div class="title text-center">
                  <h1 class="mb-10">Choose Your Plan</h1>
                  <p>When someone does something that they know that they shouldn’t do, did they.</p>
               </div>
            </div>
         </div>
         <div class="row">
            {pricelists.map((pricelist)=>{
                const {id,topheading,heading,describe,listone,listtwo,listthree,bottomheading} = pricelist;
                return(
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
                       <a class="price-btn text-uppercase" href="#">Buy Now</a>
                    </div>
                 </div>
                )
            })}
         </div>
      </div>
   </section>
   {/* End price Area */}
        </>
     );
}

export default Services;