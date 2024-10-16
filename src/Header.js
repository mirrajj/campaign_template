import React from 'react';

const Header = () => {
  return (
    <header class="site-header header-style-2">
    <div class="pbmit-header-top-area">
       <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
             <div class="pbmit-pre-header-left">
                <ul class="pbmit-contact-info">
                   <li>
                      <i class="pbmit-base-icon-phone-volume-solid"></i>
                      <a href="tel:(+1)555234-8765">Call for help: <span>(+1)555234-8765</span></a> 
                   </li>
                   <li>
                      <i class=" pbmit-base-icon-mail-alt"></i>
                      <a href="https://politicia-demo.pbminfotech.com/cdn-cgi/l/email-protection#aac2cfc6c6c5eac3c4ccc5dac5c6c3dec3c9c3cb84c9c5c7">Mail to us: <span><span class="__cf_email__" data-cfemail="91f9f4fdfdfed1f8fff7fee1fefdf8e5f8f2f8f0bff2fefc">[email&#160;protected]</span></span></a>
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
               <div class="col-md-12 p-0">
                   <div class="d-flex justify-content-between align-items-center">
                       <div class="site-branding">
                           <h1 class="site-title">
                               <a href="index-2.html">
                               <img class="logo-img" alt="Politicia" src="revolution/images/logo.png" />
                               </a>
                           </h1>
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
                                       <li class="dropdown">
                                           <a href="index-2.html">Home</a>
                                           <ul>
                                               <li><a href="index-2.html">Home page 01</a></li>
                                               <li><a href="index-02.html">Home page 02</a></li>
                                               <li><a href="index-03.html">Home page 03</a></li>
                                           </ul>
                                       </li>
                                       <li class="dropdown active">
                                           <a href="#">Pages</a>
                                           <ul>
                                               <li><a href="about-us.html">About Us</a></li>
                                               <li><a href="our-history.html">Our History</a></li>
                                               <li class="active"><a href="our-gallery.html">Our Gallery</a></li>                                             
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
 </header>
  );
}

export default Header;
