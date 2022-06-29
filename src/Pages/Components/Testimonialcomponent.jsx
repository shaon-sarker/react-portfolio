import React, { useState } from "react";
import { Fade } from "react-reveal";
import { testimonialData } from "../../Data/Testimonial";

function Testimonialcomponent() {
  const [testimonials, setTestimonial] = useState(testimonialData);
  return (
    <>
      {/* Start testimonial Area */}
      <section className="testimonial-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Client’s Feedback About Me</h1>
                <p>
                  It is very easy to start smoking but it is an uphill task to
                  quit it. Ask any chain smoker or even a person.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="active-testimonial">
              {testimonials.map((testimonial) => {
                const { id, image, heading, describe, title, altname } =
                  testimonial;
                return (
                  <Fade right>
                    <div
                      className="single-testimonial item d-flex flex-row"
                      key={id}
                    >
                      <div className="thumb">
                        <img className="img-fluid" src={image} alt={altname} />
                      </div>
                      <div className="desc">
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