import React from 'react';
import ServiceSlider from './SwiperSlider01';
import BlogSliderComponent from './BlogSliderComponent';
import SliderComponent from './SliderComponent';

const Home = () => {
  return (
    <div class="page-wrapper">
    {/* Header Main Area */}
    <header class="site-header header-style-1">
       <div class="pre-header">
          <div class="container">
            
             <div class="d-md-flex justify-content-between align-items-center">
                <div class="pbmit-pre-header-left">
                   <ul class="pbmit-contact-info">
                      <li>
                         <i class="pbmit-base-icon-phone-volume-solid"></i>
                         <a href="tel:(+1)555234-8765">Call for help: <span>(+1)555234-8765</span></a> 
                      </li>
                      <li>
                         <i class="pbmit-base-icon-mail-alt"></i>
                         <a href="https://politicia-demo.pbminfotech.com/cdn-cgi/l/email-protection#355d5059595a755c5b535a455a595c415c565c541b565a58">Mail to us: <span><span class="__cf_email__" data-cfemail="91f9f4fdfdfed1f8fff7fee1fefdf8e5f8f2f8f0bff2fefc">[email&#160;protected]</span></span></a>
                      </li>
                   </ul>
                </div>
                <div class="pbmit-pre-header-right d-flex"> Follow Us 
                   <ul class="pbmit-social-links">
                      <li class="pbmit-social-li pbmit-social-facebook ">
                         <a href="#" target="_blank"><span>
                            <i class="pbmit-base-icon-facebook-squared"></i></span>
                         </a>
                      </li>
                      <li class="pbmit-social-li pbmit-social-twitter ">
                         <a href="#" target="_blank"><span>
                            <i class="pbmit-base-icon-twitter"></i></span>
                         </a>
                      </li>
                      <li class="pbmit-social-li pbmit-social-instagram ">
                         <a href="#" target="_blank"><span>
                            <i class="pbmit-base-icon-instagram"></i></span>
                         </a>
                      </li>
                      <li class="pbmit-social-li pbmit-social-youtube ">
                         <a href="#" target="_blank"><span>
                            <i class="pbmit-base-icon-youtube-play"></i></span>
                         </a>
                      </li>
                   </ul>						
                </div>
             </div>
          </div>
       </div>
       <div class="site-header-menu">
           <div class="container">
               <div class="row">
                   <div class="col-md-12">
                       <div class="d-flex align-items-center">
                       <div class="site-branding flex-grow-1">
                           <a href="index-2.html">
                               <img class="logo-img" alt="Politicia" src="revolution/images/logo.png" />
                           </a>
                       </div>
                       <div class="site-navigation ml-auto">
                           <nav class="main-menu navbar-expand-xl navbar-light">
                               <div class="navbar-header">
                                   {/* Toggle Button */} 
                                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                       <i class="pbmit-base-icon-menu-1"></i>
                                   </button>
                               </div>
                               <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                   <ul class="navigation clearfix">
                                       <li class="dropdown active">
                                           <a href="index-2.html">Home</a>
                                           <ul>
                                               <li class="active"><a href="index-2.html">Home page 01</a></li>
                                               <li><a href="index-02.html">Home page 02</a></li>
                                               <li><a href="index-03.html">Home page 03</a></li>
                                           </ul>
                                       </li>
                                       <li class="dropdown">
                                           <a href="#">Pages</a>
                                           <ul>
                                               <li><a href="about-us.html">About Us</a></li>
                                               <li><a href="our-history.html">Our History</a></li>
                                               <li><a href="our-gallery.html">Our Gallery</a></li>                                             
                                               <li><a href="our-candidates.html">Our Candidates</a></li>
                                               <li><a href="candidate-details.html">Candidate Details</a></li>
                                               <li><a href="faq.html">Faq</a></li>
                                           </ul>
                                       </li>
                                       <li class="dropdown">
                                           <a href="issue.html">Issue</a>
                                           <ul>
                                               <li><a href="issue-details.html">Issue Detail</a></li>
                                           </ul>
                                       </li>
                                       <li class="dropdown">
                                           <a href="#">Events</a>
                                           <ul>
                                               <li><a href="event-style-1.html">Event Style 1</a></li>
                                               <li><a href="event-single-details.html">Event Single Details</a></li>
                                           </ul>
                                       </li>
                                       <li class="dropdown">
                                           <a href="#">Donations</a>
                                           <ul>
                                               <li><a href="donations-list.html">Donations List</a></li>
                                               <li><a href="donations-single-details.html">Donations Single Details</a></li>
                                           </ul>
                                       </li>
                                       <li class="dropdown">
                                           <a href="#">Blog</a>
                                           <ul>
                                               <li><a href="blog-classic.html">Blog Classic</a></li>
                                               <li><a href="blog-grid.html">Blog  Grid</a></li>
                                               <li><a href="blog-details.html">Blog Details</a></li>
                                           </ul>
                                       </li>
                                       <li><a href="contact-us.html">Contact</a></li>
                                   </ul>
                               </div>
                           </nav>
                       </div>
                       <div class="pbmit-right-box">
                           <div class="pbmit-header-search-btn">
                               <a href="#"><i class=" pbmit-base-icon-search-1"></i></a>
                           </div>
                           <div class="menu-right-box d-flex align-items-center">
                               <div class="pbmit-header-button">
                                   <a href="contact-us.html">
                                   <span class="pbmit-header-button-text-1">Join us now</span>				
                                   </a>
                               </div>
                           </div>
                       </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    {/* START Slider Demo 1 REVOLUTION SLIDER 6.5.24 */}<p class="rs-p-wp-fix"></p>
       <SliderComponent />
       {/* END REVOLUTION SLIDER */}
    </header>
    {/* Header Main Area End Here */}

    {/* Page Content */}
    <div class="page-content">
       {/* Welcome */} 
       <section class=" pbmit-bg-color-light">
          <div class="container-fluid">
             <div class="row">
                <div class="home1-about-top-section-left">
                   <div class="home1-about-top-section-inner"> 
                      <div class=" pbmit-heading-subheading text-left">
                         <h2 class="pbmit-title">Join our movement!</h2>
                         <div class="text-white"> Help fulfill our promise to make okaikwei south great again!</div>
                      </div>  
                      <form>
                         <div class="row g-2">
                            <div class="col-md-5">
                               <input type="email" class="form-control" placeholder="Email address" name="Email address" />
                            </div>
                            <div class="col-md-4">
                               <input type="text" class="form-control" placeholder="Zip Code" name="Zip Code" />
                            </div>
                            <div class="col-md-3">
                               <button type="submit" class="pbmit-btn pbmit-btn-hover-secondary">
                                  <span>Submit</span>
                               </button>
                            </div>
                         </div> 
                      </form>
                   </div>
                </div>
                <div class="home1-about-inbox-bg">
                   <div class="section-icon-wrapper text-end">
                      <a class="button-icon pbmit-lightbox-video" href="https://www.youtube.com/watch?v=l5W5Gjf2ec0">
                         <i aria-hidden="true" class="pbmit-politicia-icon pbmit-politicia-icon-play"></i>			
                      </a>
                   </div>
                   <div class="pbmit-ihbox pbmit-ihbox-style-5">
                      <div class="pbmit-ihbox-box">
                         <h2 class="pbmit-element-title"> Lets meet and help for policy talks </h2>
                         <div class="pbmit-ihbox-contents d-flex align-items-center">
                            <div class="pbmit-ihbox-icon">
                               <div class="pbmit-ihbox-icon-wrapper wpem-event-location"></div>
                            </div>
                            <h4 class="pbmit-element-heading"> Kaneshie Market, Kaneshie, Accra</h4>
                         </div>
                      </div>
                   </div>
                   <div class="counter-box">
                      <div id="clock"></div>
                   </div>
                </div>
             </div>
          </div>
       </section>
       {/* Welcome End */}  

       {/* About Start */}
       <section class="section-lg pbmit-bg-color-light home1-about-us ">
          <div class="container">
             <div class="row">
                <div class="col-xxl-3 col-xl-5 col-md-6">
                   <div class="home1-about-us-img-left">
                      <img src="revolution/images/outline.png" width="300" sytle={{color: 'green'}}class="" alt="" />
                      <img src="images/single3.png" class="" alt="" />
                   </div>
                </div>
                <div class="col-xxl-6 col-xl-7 col-md-6">
                   <div class=" pbmit-heading-subheading text-left">
                      <h2 class="pbmit-title">We’re people who don’t support progressive.</h2>
                      <div class="pbmit-heading-desc pe-5">
                         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.
                      </div>
                      <div class="pbmit-heading-desc pe-5">
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </div>
                      <a href="about-us.html" class="pbmit-btn pbmit-btn-hover-secondary">
                         <span>About party</span>
                      </a>
                   </div>
                </div>
                <div class="col-xxl-3 col-xl-12 home1-about-us-img-right">
                   <img src="revolution/images/ernest02.png" class="" alt="" />
                </div>
             </div>
          </div>
       </section>
       {/* About End */} 

       {/* Service Start */} 
       <section class="section-lg">
          <div class="home1-service-section">
             <div class="row">
                <div class="col-xl-4 col-lg-12 service-tbox-left home1-service-arrow">
                   <div class=" pbmit-heading-subheading text-left">
                      <h2 class="pbmit-title  text-white">Our Priorities</h2>
                      <div class="pbmit-heading-desc text-white">
                         We are offering the following information's about us that circular that what we actually.
                      </div>
                   </div>
                </div>
                <div class="col-xl-8 col-lg-12">
                        <ServiceSlider />
                </div>
             </div>
          </div>
       </section>
       {/* Service End */}

       {/* Future Start */}
       <section class="section-lgb">
          <div class="container">
             <div class=" pbmit-heading-subheading text-center">
                <h2 class="pbmit-title">Participate to Our Political Future</h2>
             </div>
             <div class="row">
                <div class="col-xl-6 col-lg-12">
                   <div class="wpem-event-action-url event-style-color tour">
                      <div class="wpem-event-banner">
                         <div class="wpem-event-banner-img" style={{backgroundImage: `url('images/eventbanner01.jpg')`}}>
                            <div class="wpem-event-date">
                               <div class="wpem-event-date-type">
                                  <div class="wpem-from-date">
                                     <div class="wpem-date">29</div>
                                     <div class="wpem-month">Jul</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="wpem-event-infomation">
                         <div class="wpem-event-date">
                            <div class="wpem-event-date-type">
                               <div class="wpem-from-date">
                                  <div class="wpem-date">29</div>
                                  <div class="wpem-month">Jul</div>
                               </div>
                            </div>
                         </div>
                         <div class="wpem-event-details">
                            <div class="wpem-event-type"><a href="#">
                               <span class="wpem-event-type-text event-type tour ">Tour</span></a>
                            </div>
                            <div class="wpem-event-title">
                               <h3 class="wpem-heading-text">
                                  <a href="event-single-details.html">Press Conference about New Tax Reform</a>
                               </h3>
                            </div>
                            <div class="pbmit-event-meta">
                               <div class="wpem-event-location">
                                  <span class="wpem-event-location-text">Aberdeen City, UK </span>
                               </div>
                               <div class="wpem-event-date-time">
                                  <span class="wpem-event-date-time-text">2021-07-29 @ 12:00 AM </span>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="pbmit-event-arrow-link">
                         <a href="event-single-details.html" class="event-style-color tour"></a>
                      </div>
                   </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                   <div class="wpem-event-action-url event-style-color tour">
                      <div class="wpem-event-banner">
                         <div class="wpem-event-banner-img" style={{backgroundImage: `url('images/eventbanner02.jpg')`}}>
                            <div class="wpem-event-date">
                               <div class="wpem-event-date-type">
                                  <div class="wpem-from-date">
                                     <div class="wpem-date">29</div>
                                     <div class="wpem-month">Jul</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="wpem-event-infomation">
                         <div class="wpem-event-date">
                            <div class="wpem-event-date-type">
                               <div class="wpem-from-date">
                                  <div class="wpem-date">29</div>
                                  <div class="wpem-month">Jul</div>
                               </div>
                            </div>
                         </div>
                         <div class="wpem-event-details">
                            <div class="wpem-event-type"><a href="#">
                               <span class="wpem-event-type-text event-type tour ">Attraction</span></a>
                            </div>
                            <div class="wpem-event-title">
                               <h3 class="wpem-heading-text">
                                  <a href="event-single-details.html">The Corner Meetings for Next Elections.</a></h3>
                            </div>
                            <div class="pbmit-event-meta">
                               <div class="wpem-event-location">
                                  <span class="wpem-event-location-text">Aberdeen City, UK </span>
                               </div>
                               <div class="wpem-event-date-time">
                                  <span class="wpem-event-date-time-text"> 2018-01-18 @ 12:00 AM </span>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="pbmit-event-arrow-link">
                         <a href="event-single-details.html" class="event-style-color tour"></a>
                      </div>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-xl-6 col-lg-12">
                   <div class="wpem-event-action-url event-style-color tour">
                      <div class="wpem-event-banner">
                         <div class="wpem-event-banner-img" style={{backgroundImage: `url('images/eventbanner03.jpg')`}}>
                            <div class="wpem-event-date">
                               <div class="wpem-event-date-type">
                                  <div class="wpem-from-date">
                                     <div class="wpem-date">29</div>
                                     <div class="wpem-month">Jul</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="wpem-event-infomation">
                         <div class="wpem-event-date">
                            <div class="wpem-event-date-type">
                               <div class="wpem-from-date">
                                  <div class="wpem-date">29</div>
                                  <div class="wpem-month">Jul</div>
                               </div>
                            </div>
                         </div>
                         <div class="wpem-event-details">
                            <div class="wpem-event-type"><a href="#">
                               <span class="wpem-event-type-text event-type tour ">Action alert</span></a>
                            </div>
                            <div class="wpem-event-title">
                               <h3 class="wpem-heading-text">
                                  <a href="event-single-details.html">Early Voting Begins on September 2020</a>
                               </h3>
                            </div>
                            <div class="pbmit-event-meta">
                               <div class="wpem-event-location">
                                  <span class="wpem-event-location-text">Aberdeen City, UK </span>
                               </div>
                               <div class="wpem-event-date-time">
                                  <span class="wpem-event-date-time-text">2018-04-22 @ 01:00 AM</span>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="pbmit-event-arrow-link">
                         <a href="event-single-details.html" class="event-style-color tour"></a>
                      </div>
                   </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                   <div class="wpem-event-action-url event-style-color tour">
                      <div class="wpem-event-banner">
                         <div class="wpem-event-banner-img" style={{backgroundImage: `url('images/eventbanner04.jpg')`}}>
                            <div class="wpem-event-date">
                               <div class="wpem-event-date-type">
                                  <div class="wpem-from-date">
                                     <div class="wpem-date">29</div>
                                     <div class="wpem-month">Jul</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="wpem-event-infomation">
                         <div class="wpem-event-date">
                            <div class="wpem-event-date-type">
                               <div class="wpem-from-date">
                                  <div class="wpem-date">29</div>
                                  <div class="wpem-month">Jul</div>
                               </div>
                            </div>
                         </div>
                         <div class="wpem-event-details">
                            <div class="wpem-event-type"><a href="#">
                               <span class="wpem-event-type-text event-type tour ">Attraction</span></a>
                            </div>
                            <div class="wpem-event-title">
                               <h3 class="wpem-heading-text">
                                  <a href="event-single-details.html">Politics is why we can’t have nice things</a></h3>
                            </div>
                            <div class="pbmit-event-meta">
                               <div class="wpem-event-location">
                                  <span class="wpem-event-location-text">City , Portland </span>
                               </div>
                               <div class="wpem-event-date-time">
                                  <span class="wpem-event-date-time-text"> 2019-01-16 @ 04:30 PM </span>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="pbmit-event-arrow-link">
                         <a href="event-single-details.html" class="event-style-color tour"></a>
                      </div>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-xl-6 col-lg-12">
                   <div class="wpem-event-action-url event-style-color tour">
                      <div class="wpem-event-banner">
                         <div class="wpem-event-banner-img" style={{backgroundImage: `url('images/eventbanner05.jpg')`}}>
                            <div class="wpem-event-date">
                               <div class="wpem-event-date-type">
                                  <div class="wpem-from-date">
                                     <div class="wpem-date">29</div>
                                     <div class="wpem-month">Jul</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="wpem-event-infomation">
                         <div class="wpem-event-date">
                            <div class="wpem-event-date-type">
                               <div class="wpem-from-date">
                                  <div class="wpem-date">29</div>
                                  <div class="wpem-month">Jul</div>
                               </div>
                            </div>
                         </div>
                         <div class="wpem-event-details">
                            <div class="wpem-event-type"><a href="#">
                               <span class="wpem-event-type-text event-type tour ">Domination</span></a>
                            </div>
                            <div class="wpem-event-title">
                               <h3 class="wpem-heading-text">
                                  <a href="event-single-details.html">Note:New Party Leadership Conference.</a></h3>
                            </div>
                            <div class="pbmit-event-meta">
                               <div class="wpem-event-location">
                                  <span class="wpem-event-location-text">City, Ukrain</span>
                               </div>
                               <div class="wpem-event-date-time">
                                  <span class="wpem-event-date-time-text">2021-10-24 @ 11:30 AM </span>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="pbmit-event-arrow-link">
                         <a href="event-single-details.html" class="event-style-color tour"></a>
                      </div>
                   </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                   <div class="wpem-event-action-url event-style-color tour">
                      <div class="wpem-event-banner">
                         <div class="wpem-event-banner-img" style={{backgroundImage: `url('images/eventbanner06.jpg')`}}>
                            <div class="wpem-event-date">
                               <div class="wpem-event-date-type">
                                  <div class="wpem-from-date">
                                     <div class="wpem-date">29</div>
                                     <div class="wpem-month">Jul</div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="wpem-event-infomation">
                         <div class="wpem-event-date">
                            <div class="wpem-event-date-type">
                               <div class="wpem-from-date">
                                  <div class="wpem-date">29</div>
                                  <div class="wpem-month">Jul</div>
                               </div>
                            </div>
                         </div>
                         <div class="wpem-event-details">
                            <div class="wpem-event-type"><a href="#">
                               <span class="wpem-event-type-text event-type tour ">Political events‎</span></a>
                            </div>
                            <div class="wpem-event-title">
                               <h3 class="wpem-heading-text">
                                  <a href="event-single-details.html">Law Issues Of International Conference.</a></h3>
                            </div>
                            <div class="pbmit-event-meta">
                               <div class="wpem-event-location">
                                  <span class="wpem-event-location-text">Aberdeen City, UK </span>
                               </div>
                               <div class="wpem-event-date-time">
                                  <span class="wpem-event-date-time-text"> 2020-09-05 @ 10:30 PM  </span>
                               </div>
                            </div>
                         </div>
                      </div>
                      <div class="pbmit-event-arrow-link">
                         <a href="event-single-details.html" class="event-style-color tour"></a>
                      </div>
                   </div>
                </div>
             </div>
             <div class="text-center pt-3">
                <a href="event-style-1.html" class="pbmit-btn pbmit-btn-hover-secondary">
                   <span>All Events</span>
                </a>
             </div>
          </div>
       </section>
       {/* Future End */} 

       {/* Provided Start */} 
       <section class="home1-Provided-section-bg">
          <div class="container">
             <div class="row home1-section-Provided">
                <div class="col-xl-6 col-lg-12">
                   <div class="pbmit-heading-subheading text-left">
                      <h2 class="pbmit-title text-white">Together We can Make Something Great!</h2>
                      <div class="pbmit-heading-desc text-white pe-5">
                         I will give you a complete account of the system, and expound the actual teachings of the great explorer truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                      </div>
                      <a href="donations-single-details.html" class="pbmit-btn pbmit-btn-hover-secondary mt-4">
                         <span>Donate Now</span>
                      </a>
                   </div>
                </div>
                <div class="col-xl-6 col-lg-12">
                   <div class="active-onhover">
                      <article class="pbmit-miconheading-style-8">
                         <div class="pbmit-ihbox pbmit-ihbox-style-8">
                            <div class="pbmit-ihbox-box">
                               <div class="pbmit-ihbox-icon">
                                  <div class="pbmit-ihbox-icon-wrapper">
                                     <i class="pbmit-politicia-icon pbmit-politicia-icon-equality"></i>
                                  </div>
                               </div>
                               <div class="pbmit-ihbox-contents">
                                  <h2 class="pbmit-element-title"> Equality and solidarity</h2>
                                  <div class="pbmit-heading-desc" onMouseOver={(e) => e.target.style.color = "black"}>The generated is therefore always free from repetition, injected humour, or words etc.</div>
                               </div>
                            </div>
                         </div>
                      </article>
                      <article class="pbmit-miconheading-style-8">
                         <div class="pbmit-ihbox pbmit-ihbox-style-8">
                            <div class="pbmit-ihbox-box">
                               <div class="pbmit-ihbox-icon">
                                  <div class="pbmit-ihbox-icon-wrapper">
                                     <i class="pbmit-politicia-icon pbmit-politicia-icon-planet-earth-1"></i>
                                  </div>
                               </div>
                               <div class="pbmit-ihbox-contents">
                                  <h2 class="pbmit-element-title">To inspire humanity</h2>
                                  <div class="pbmit-heading-desc">The generated is therefore always free from repetition, injected humour, or words etc.</div>
                               </div>
                            </div>
                         </div>
                      </article>
                      <article class="pbmit-miconheading-style-8">
                         <div class="pbmit-ihbox pbmit-ihbox-style-8">
                            <div class="pbmit-ihbox-box">
                               <div class="pbmit-ihbox-icon">
                                  <div class="pbmit-ihbox-icon-wrapper">
                                     <i class="pbmit-politicia-icon pbmit-politicia-icon-family"></i>
                                  </div>
                               </div>
                               <div class="pbmit-ihbox-contents">
                                  <h2 class="pbmit-element-title"> Better living programs</h2>
                                  <div class="pbmit-heading-desc">The generated is therefore always free from repetition, injected humour, or words etc.</div>
                               </div>
                            </div>
                         </div>
                      </article>
                   </div>
                </div>
             </div>
          </div>
       </section>
       {/* Provided End */}


       {/* Appointment Start */}
       <section>
          <div class="container p-sm-0">
             <div class="home1-section-appointment">
                <div class="d-flex justify-content-between align-items-center">
                   <div class="section-appointment-left">
                      <h3>Make A Donation For Your Country</h3>
                   </div>
                   <div class="section-appointment-right">
                      <form>
                         <div class="input-group">
                            <input type="text" class="form-control" placeholder="100.00" aria-label="Amount (to the nearest dollar)" />
                            <span class="input-group-text">$</span>
                         </div>
                         <button type="submit" class="pbmit-btn">DonateNow</button>
                      </form>
                   </div>
                </div>
             </div>
          </div>
       </section>
       {/* Appointment End */}

       {/* History Start */}
       <section class="section-lg pbmit-bg-color-light" >
          <div class="container">
             <div class="row">
                <div class="col-md-6">
                   <div class=" pbmit-heading-subheading text-left pe-5">
                      <h2 class="pbmit-title">Your Vote for Progress We Make History</h2>
                   </div>
                   <img src="revolution/images/map_green.png" width="400" height="400" class="img-fluid" alt="" />
                </div>
                <div class="col-md-6">
                   <div class="accordion" id="accordionExample">
                      <div class="accordion-item active">
                         <h2 class="accordion-header" id="heading-One">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-One" aria-expanded="true" aria-controls="collapse-One">
                               Reasons to Vote for us?
                            </button>
                         </h2>
                         <div id="collapse-One" class="accordion-collapse collapse show" aria-labelledby="heading-One" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <p>
                                 Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum quis dolorem nulla
                               </p>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="heading-Two">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-Two" aria-expanded="false" aria-controls="collapse-Two">
                               What you need to know before caucus?
                            </button>
                         </h2>
                         <div id="collapse-Two" class="accordion-collapse collapse" aria-labelledby="heading-Two" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <p>
                                 Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum quis dolorem nulla
                               </p>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="heading-Three">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-Three" aria-expanded="false" aria-controls="collapse-Three">
                               How do I know that I’ve voted?
                            </button>
                         </h2>
                         <div id="collapse-Three" class="accordion-collapse collapse" aria-labelledby="heading-Three" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <p>
                                 Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum quis dolorem nulla
                               </p>
                            </div>
                         </div>
                      </div>
                      <div class="accordion-item">
                         <h2 class="accordion-header" id="heading-Four">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-Four" aria-expanded="false" aria-controls="collapse-Four">
                               What you need to know before caucus?
                            </button>
                         </h2>
                         <div id="collapse-Four" class="accordion-collapse collapse" aria-labelledby="heading-Four" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                               <p>
                                 Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum quis dolorem nulla
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
       {/* History End */}

       {/* Blog Start */}
       <section class="section-lgt">
          <div class="container">
             <div class=" pbmit-heading-subheading text-center">
                <h2 class="pbmit-title">Latest News & Press</h2>
             </div>
             <BlogSliderComponent />
          </div>
       </section>
       {/* Blog End */}

       {/* Faq Start */}
       <section class="faq-section-bg section-lg">
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
       </section>
       {/* Faq End */}

    </div>
    {/* Page Content End */}

    {/* footer */}
   
    {/* footer End */}
    </div>
  );
}

export default Home;
