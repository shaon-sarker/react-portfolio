import React from "react";
// import {Form,Button} from 'react-bootstrap/Form'

function Contact() {
  return (
    <>
      {/* start banner Area */}
      <section class="relative about-banner">
        <div class="overlay overlay-bg"></div>
        <div class="container">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Contact Us</h1>
              <p class="text-white link-nav">
                <a href="/">Home </a>
                <span class="lnr lnr-arrow-right"></span>
                <a href="/contact"> Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}
      {/* Start contact-page Area */}
      <section class="contact-page-area section-gap">
        <div class="container">
          <div class="row">
            {/* <div class="map-wrap" style="width:100%; height: 445px;" id="map"></div> */}
            <div class="col-lg-4 d-flex flex-column address-wrap">
              <div class="single-contact-address d-flex flex-row">
                <div class="icon">
                  <span class="lnr lnr-home"></span>
                </div>
                <div class="contact-details">
                  <h5>Dhaka, Bangladesh</h5>
                  <p>Dhanmondi</p>
                </div>
              </div>
              <div class="single-contact-address d-flex flex-row">
                <div class="icon">
                  <span class="lnr lnr-phone-handset"></span>
                </div>
                <div class="contact-details">
                  <h5>+8801535814843</h5>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div class="single-contact-address d-flex flex-row">
                <div class="icon">
                  <span class="lnr lnr-envelope"></span>
                </div>
                <div class="contact-details">
                  <h5>shaonsarker92@gmail.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
                  <form className="form-area contact-form text-right" action="">
                     <div class="row">
                        <div class="col-lg-6 form-group">
                           <input name="name" placeholder="Enter your name"
                              class="common-input mb-20 form-control" required="" type="text"/>
                           <input name="email" placeholder="Enter email address"
                            required="" type="email" class="common-input mb-20 form-control"/>
                           <input name="subject" placeholder="Enter subject" class="common-input mb-20 form-control"
                              required="" type="text"/>
                        </div>
                        <div class="col-lg-6 form-group">
                           <textarea class="common-textarea form-control" name="message"
                              placeholder="Enter Messege" required=""/>
                        </div>
                        
                        <div class="col-lg-12">
                           <div class="alert-msg"></div>
                           <button class="btn btn-primary">Send Message</button>
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