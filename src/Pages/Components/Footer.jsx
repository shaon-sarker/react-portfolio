import React from 'react';

function Footer() {
    return ( 
        <>
        {/* start footer Area */}
   <footer className="footer-area section-gap">
      <div className="container">
         <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
               <div className="single-footer-widget">
                  <h4>About Me</h4>
                  <p>
                     We have tested a number of registry fix and clean utilities and present our top 3 list on
                     our site for your convenience.
                  </p>
                  <p className="footer-text">
                     Copyright &copy;
                     <script>document.write(new Date().getFullYear());</script> All rights reserved | This
                     template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="#"
                        target="_blank">Shaon</a>
                   
                  </p>
               </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
               <div className="single-footer-widget">
                  <h4>Newsletter</h4>
                  <p>Stay updated with our latest trends</p>
                  <div className="" id="mc_embed_signup">
                     <form target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get">
                        <div className="input-group">
                           <input type="text" className="form-control" name="EMAIL" placeholder="Enter Email Address"
                              onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email Address '"
                              required=""/>
                           <div classNameName="input-group-btn">
                              <button className="btn btn-default" type="submit">
                                 <span className="lnr lnr-arrow-right"></span>
                              </button>
                           </div>
                           <div className="info"></div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
               <div className="single-footer-widget">
                  <h4>Follow Me</h4>
                  <p>Let us be social</p>
                  <div className="footer-social d-flex align-items-center">
                     <a href="https://www.facebook.com/shaon.sarker.9699" target="__blank"><i
                           className="fa fa-facebook"></i></a>
                     <a href="https://twitter.com/Shaon23081175" target="__blank"><i className="fa fa-twitter"></i></a>
                     <a href="https://dribbble.com/Shaon_54" target="__blank"><i className="fa fa-dribbble"></i></a>
                     <a href="https://www.linkedin.com/in/shaon-sarker/" target="__blank"><i
                           className="fa fa-linkedin"></i></a>
                     <a href="https://github.com/shaon-sarker" target="__blank"><i className="fa fa-github"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   {/* End footer Area */}
        </>
     );
}

export default Footer;