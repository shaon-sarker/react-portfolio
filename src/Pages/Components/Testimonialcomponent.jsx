import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { testimonialData } from '../../Data/Testimonial';


function Testimonialcomponent() {

    const [testimonials, setTestimonial] = useState(testimonialData);
    return ( 
        <>
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
                  <Fade right>
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
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End testimonial Area */}
        </>
     );
}

export default Testimonialcomponent;