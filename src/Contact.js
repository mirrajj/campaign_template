import React from 'react';
import Header from './Header';

const Contact = () => {
  return (
    <div class="page-wrapper">

      {/* Header Main Area */}
        <Header />
      {/* Header Main Area End Here */}

      {/* Title Bar */}
      <div class="pbmit-title-bar-wrapper">
         <div class="container">
            <div class="pbmit-title-bar-content">
               <div class="pbmit-title-bar-content-inner">
                  <div class="pbmit-tbar">
                     <div class="pbmit-tbar-inner container">
                        <h1 class="pbmit-tbar-title">Contact Us</h1>
                     </div>
                  </div>
                  <div class="pbmit-breadcrumb">
                     <div class="pbmit-breadcrumb-inner">
                        <span><a title="" href="#" class="home"><span>politicia</span></a></span>
                        <span class="sep"><i class="pbmit-base-icon-angle-double-right"></i></span>
                        <span><span class="post-root post post-post current-item">Contact Us</span></span>
                     </div>
                  </div>
               </div>
            </div> 
         </div> 
      </div>
      {/* Title Bar End*/}

      {/* Contact Us Content */}
      <div class="page-content">   
         {/* Contact */}
         <section class="section-lgt contact-section">
            <div class="container">
               <div class="row g-0">
                  <div class="col-md-5">
                     <div class="pbmit-heading-subheading">
                        <h2 class="pbmit-title mb-3">You can connect with us when need help!</h2>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                        <a class="pbmit-globlacolor-link" href="#"> dolore magna aliqua ut enim ad minim</a> 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                     </div>
                  </div>
               </div>
            </div>
            <section class="contact-section-bg">
               <div class="container">
                  <div class="row g-0">
                     <div class="col-md-5">
                        <div class="contact-section-left">                       
                           <div class="pbmit-ihbox pbmit-ihbox-style-4">
                              <div class="pbmit-ihbox-box d-flex align-items-center">
                                 <div class="pbmit-ihbox-icon">
                                    <div class="pbmit-ihbox-icon-wrapper">
                                       <i class="pbmit-politicia-icon pbmit-politicia-icon-placeholder"></i>
                                    </div>
                                 </div>
                                 <div class="pbmit-ihbox-contents">
                                    <h2 class="pbmit-element-title">Our Location</h2>
                                    <div>456, London Street,<br/>New York, 33454</div>
                                 </div>
                              </div>
                           </div> 
                           <div class="pbmit-ihbox pbmit-ihbox-style-4">
                              <div class="pbmit-ihbox-box d-flex align-items-center">
                                 <div class="pbmit-ihbox-icon">
                                    <div class="pbmit-ihbox-icon-wrapper">
                                       <i class="pbmit-politicia-icon pbmit-politicia-icon-telephone"></i>
                                    </div>
                                 </div>
                                 <div class="pbmit-ihbox-contents">
                                    <h2 class="pbmit-element-title">Phone Number</h2>
                                    <div>+1 888-654-4329<br/>+1 888-543-8765 </div>
                                 </div>
                              </div>
                           </div> 
                           <div class="pbmit-ihbox pbmit-ihbox-style-4">
                              <div class="pbmit-ihbox-box d-flex align-items-center">
                                 <div class="pbmit-ihbox-icon">
                                    <div class="pbmit-ihbox-icon-wrapper">
                                       <i class="pbmit-politicia-icon pbmit-politicia-icon-email"></i>
                                    </div>
                                 </div>
                                 <div class="pbmit-ihbox-contents">
                                    <h2 class="pbmit-element-title">Our Location</h2>
                                    <div><a href="https://politicia-demo.pbminfotech.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="bcdfd3d2c8dddfc8fcd9c4ddd1ccd0d992dfd3d1">[email&#160;protected]</a><br/><a href="https://politicia-demo.pbminfotech.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ff9e9b929691bf9a879e928f939ad19c9092">[email&#160;protected]</a></div>
                                 </div>
                              </div>
                           </div>                                                   
                        </div>
                     </div>
                     <div class="col-md-7">
                        <form class="contact-form" method="post" id="contact-form" action="https://politicia-demo.pbminfotech.com/html-demo/send.php">
							<div class="row mb-3 g-3">
								<div class="col-lg-6 col-sm-6">
									<input type="text" class="form-control" placeholder="Your name" name="name" required/>
								</div>
								<div class="col-lg-6 col-sm-6">
									<input type="email" class="form-control" placeholder="Your Email" name="email" required/>
								</div>
								<div class="col-lg-6 col-sm-6">
									<input type="text" class="form-control" placeholder="Company Name" name="subject" required/>
								</div>
								<div class="col-lg-6 col-sm-6">
									<select name="department" class="form-select" aria-label="Default select example">Subject type
										<option selected>Subject type</option>
										<option value="1">Development politics</option>
										<option value="2">Policy Analyst</option>
										<option value="3">Public Policy</option>
									</select>
								</div>
								<div class="col-lg-12 col-sm-12">
									<textarea class="form-control" name="message" rows="4" placeholder="Your message" style={{height: '150px'}} required></textarea>
								</div>
								<div class="col-lg-12 col-sm-12 mt-5 pb-4">
									<button type="submit" class="pbmit-btn pbmit-btn-global pbmit-btn-hover-secondary pbmit-btn-shape-round">
										<i class="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
										<span>Send Message</span>
									</button>
								</div>
								<div class="col-md-12 col-lg-12 message-status"></div>
							</div>
                        </form> 
                     </div>
                  </div>
               </div>
            </section>
            <div class="faq-section-bg">
               <div class="container">
                  <div class=" pbmit-heading-subheading center-align text-center">
                     <h2 class="pbmit-title-color">Become a Volunteer</h2>
                     <div class="pbmit-heading-desc">
                        Porta est iaculis, minim consequatur Cubilia venenatis! Congue iure curabitur incididunt consequat accusantium quam, ultricies eget por id, aliquam
                     </div>
                     <a href="contact-us.html" class="pbmit-btn">
                        <span>Join us Now</span>
                     </a>
                  </div>
                  <div class="faq-section-animation">
                     <div class="faq-section-animation-3 img">
                        <img src="images/animation-02.png" class="faq-animation-img-1" alt="" />
                     </div>
                     <div class="faq-section-animation-3 img">
                        <img src="images/animation-08.png" class="faq-animation-img-2" alt="" />
                     </div>
                     <div class="faq-section-animation-1 img">
                        <img src="images/animation-05.png" class="faq-animation-img-3" alt="" />
                     </div>
                     <div class="faq-section-animation-2 img">
                        <img src="images/animation-03.png" class="faq-animation-img-4" alt="" />
                     </div>
                     <div class="faq-section-animation-2 img">
                        <img src="images/animation-03.png" class="faq-animation-img-5" alt="" />
                     </div>
                     <div class="faq-section-animation-1 img">
                        <img src="images/animation-07.png" class="faq-animation-img-6" alt="" />
                     </div>
                     <div class="faq-section-animation-2 img">
                        <img src="images/animation-03.png" class="faq-animation-img-7" alt="" />
                     </div> 
                     <div class="faq-section-animation-3 img">
                        <img src="images/animation-08.png" class="faq-animation-img-8" alt="" />
                     </div>
                     <div class="faq-section-animation-1 img">
                        <img src="images/animation-01.png" class="faq-animation-img-9" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Contact End */}
      </div>
      {/* Contact Us Content End */}
      
      {/* footer */}
       
      {/* footer End */}
   </div>
  );
}

export default Contact;
