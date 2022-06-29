import React from "react";
// import {Form,Button} from 'react-bootstrap/Form'

function Contact() {
  return (
    <>
      {/* start banner Area */}
      <section className="relative about-banner">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Contact Us</h1>
              <p className="text-white link-nav">
                <a href="/">Home </a>
                <span className="lnr lnr-arrow-right"></span>
                <a href="/contact"> Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      {/* Start contact-page Area */}
      <section className="contact-page-area section-gap">
        <div className="container">
          <div className="row">
            {/* <div className="map-wrap" style="width:100%; height: 445px;" id="map"></div> */}
            <div className="col-lg-4 d-flex flex-column address-wrap">
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home"></span>
                </div>
                <div className="contact-details">
                  <h5>Dhaka, Bangladesh</h5>
                  <p>Dhanmondi</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset"></span>
                </div>
                <div className="contact-details">
                  <h5>+8801535814843</h5>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope"></span>
                </div>
                <div className="contact-details">
                  <h5>shaonsarker92@gmail.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
                  <form classNameName="form-area contact-form text-right" action="">
                     <div className="row">
                        <div className="col-lg-6 form-group">
                           <input name="name" placeholder="Enter your name"
                              className="common-input mb-20 form-control" required="" type="text"/>
                           <input name="email" placeholder="Enter email address"
                            required="" type="email" className="common-input mb-20 form-control"/>
                           <input name="subject" placeholder="Enter subject" className="common-input mb-20 form-control"
                              required="" type="text"/>
                        </div>
                        <div className="col-lg-6 form-group">
                           <textarea className="common-textarea form-control" name="message"
                              placeholder="Enter Messege" required=""/>
                        </div>
                        
                        <div className="col-lg-12">
                           <div className="alert-msg"></div>
                           <button className="btn btn-primary">Send Message</button>
                        </div>
                     </div>
                  </form>
               </div>
          </div>
        </div>
      </section>
      {/* End contact-page Area */}
    </>
  );
}

export default Contact;