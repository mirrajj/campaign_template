import React from 'react';
import Header from './Header';

const EventsDetails = () => {
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
                  <h1 class="pbmit-tbar-title">Early Voting Begins On September 2020</h1>
               </div>
            </div>
            <div class="pbmit-breadcrumb">
               <div class="pbmit-breadcrumb-inner">
                  <span><a href="#" class="home"><span>Politicia</span></a></span>
                  <span class="sep"><i class="pbmit-base-icon-angle-double-right"></i></span>
                  <span><span class="post-root post post-post current-item">Media</span></span>
                  <span class="sep"><i class="pbmit-base-icon-angle-double-right"></i></span> 
                  <span><span class="post-root post post-post current-item">Early Voting Begins On September 2020</span></span>
               </div>
            </div>
         </div>
      </div> 
   </div> 
</div>
{/* Title Bar End*/}

   {/* Page Content */}
   <div class="page-content">

      {/* Event Single Details */} 
      <section class="section-lgx event-single">
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <img  src="images/eventbanner-03.jpg" class="w-100 img-fluid" alt="" />
                  <div class="event-details">
                     <div class="event-details-list">
                        <div class="row">
                           <div class="col-lg-8">
                              <h2 class="pbmit-title">Early Voting Begins on September 2020</h2>
                              <div class="event-organizer">
                                 <div class="event-organizer-name"> by 
                                    <a href="#">Cheryl Dunye</a> 
                                 </div>
                                 <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="343 people viewed this event."><i class="icon-eye"></i> 347 </a>
                              </div>
                              <p>Jacidi tumi sopno charini hoye khobor hoyto kokhono ar frea hobe na. ovimani pont ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernat ur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis ci velit, sed quia non numquam eius modi tempora incidun.</p>
                              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                           </div>
                           <div class="col-lg-4">
                              <div class="event-sidebar-button">
                                 <button type="button" class="registration-button" value="Register for event">Register for event</button>
                              </div>
                              <div class="single-event-sidebar-info">
                                 <h3 class="heading-text">Date And Time</h3>
                                 <div class="event-date-time">
                                    <span class="event-date-time-text">2018-04-22 @ 01:00 AM</span>
                                 </div>
                                 <h3 class="heading-text">Location</h3>
                                 <a href="#" target="_blank">Aberdeen City, Us</a>                                        
                                 <h3 class="heading-text">Event Types</h3>
                                 <div class="event-type">
                                    <a href="#">Action alert</a>
                                 </div>
                                 <h3 class="heading-text">Event Category</h3>
                                 <div class="event-type">
                                    <a href="#">Media</a>
                                 </div>
                              </div>
                              <h3 class="heading-text">Share With Friends</h3>
                              <div class="event-share-lists">
                                 <ul>
                                    <li class="wpem-facebook">
                                       <i class="pbmit-base-icon-facebook-squared"></i>
                                    </li>
                                    <li class="wpem-twitter">
                                       <i class="pbmit-base-icon-twitter"></i>
                                    </li>
                                    <li class="wpem-linkedin">
                                       <i class="pbmit-base-icon-linkedin-squared"></i>
                                    </li>
                                    <li class="wpem-pinterest">
                                       <i class="pbmit-base-icon-pinterest"></i>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div> 
      </section>
      {/* Event Single Details End */} 

   </div>
   {/*Page Content End */}

{/* Footer */}

{/* Footer End */}

</div>
  );
}

export default EventsDetails;
