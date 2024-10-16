import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


const ServiceSlider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30} // Margin between slides
        slidesPerView={3} // Number of columns
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true} // Optionally loop the slides
      >
        <SwiperSlide>
          <article className="pbmit-service-style-2">
            <div className="pbminfotech-post-item">
              <div className="pbmit-service-img-wrapper">
                <div className="pbmit-featured-wrapper">
                  <img src="images/services/service1.jpg" className="img-fluid" alt="Family Protection" />
                </div>
              </div>
              <div className="pbmit-meta">
                <div className="pbmit-service-icon-wrapper">
                  <i className="pbmit-politicia-icon pbmit-politicia-icon-civil-rights"></i>
                </div>
                <h3 className="pbmit-service-title">
                  <a href="issue-details.html">Family Protection</a>
                </h3>
              </div>
              <div class="pbminfotech-box-content">
                  <div class="pbminfotech-box-content-inner">
                     <div class="pbmit-service-icon-wrapper">	
                        <i class="pbmit-politicia-icon pbmit-politicia-icon-civil-rights"></i>				
                     </div>
                     <h3 class="pbmit-service-title">
                        <a href="issue-details.html">Family Protection</a>
                     </h3>
                  </div>
                  <div class="pbmit-service-content">
                     <p> If you are going to use a passage of  you need to be sure there anything hidden in the middle.</p>
                  </div>
                  <div class="pbmit-service-btn"> 
                     <a class="btn-arrow" href="issue-details.html"><span>Read More</span></a>
                  </div>
                  </div>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="pbmit-service-style-2">
            <div className="pbminfotech-post-item">
              <div className="pbmit-service-img-wrapper">
                <div className="pbmit-featured-wrapper">
                  <img src="images/services/service05.jpg" className="img-fluid" alt="Political Speech" />
                </div>
              </div>
              <div className="pbmit-meta">
                <div className="pbmit-service-icon-wrapper">
                  <i className="pbmit-politicia-icon pbmit-politicia-icon-equality-3"></i>
                </div>
                <h3 className="pbmit-service-title">
                  <a href="issue-details.html">Political Speech</a>
                </h3>
              </div>
              <div className="pbminfotech-box-content">
                <p>If you are going to use a passage of you need to be sure there anything hidden in the middle.</p>
                <div className="pbmit-service-btn">
                  <a className="btn-arrow" href="issue-details.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="pbmit-service-style-2">
            <div className="pbminfotech-post-item">
              <div className="pbmit-service-img-wrapper">
                <div className="pbmit-featured-wrapper">
                  <img src="images/services/service05.jpg" className="img-fluid" alt="Political Speech" />
                </div>
              </div>
              <div className="pbmit-meta">
                <div className="pbmit-service-icon-wrapper">
                  <i className="pbmit-politicia-icon pbmit-politicia-icon-equality-3"></i>
                </div>
                <h3 className="pbmit-service-title">
                  <a href="issue-details.html">Political Speech</a>
                </h3>
              </div>
              <div className="pbminfotech-box-content">
                <p>If you are going to use a passage of you need to be sure there anything hidden in the middle.</p>
                <div className="pbmit-service-btn">
                  <a className="btn-arrow" href="issue-details.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="pbmit-service-style-2">
            <div className="pbminfotech-post-item">
              <div className="pbmit-service-img-wrapper">
                <div className="pbmit-featured-wrapper">
                  <img src="images/services/service05.jpg" className="img-fluid" alt="Political Speech" />
                </div>
              </div>
              <div className="pbmit-meta">
                <div className="pbmit-service-icon-wrapper">
                  <i className="pbmit-politicia-icon pbmit-politicia-icon-equality-3"></i>
                </div>
                <h3 className="pbmit-service-title">
                  <a href="issue-details.html">Political Speech</a>
                </h3>
              </div>
              <div className="pbminfotech-box-content">
                <p>If you are going to use a passage of you need to be sure there anything hidden in the middle.</p>
                <div className="pbmit-service-btn">
                  <a className="btn-arrow" href="issue-details.html">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>

        {/* Repeat other slides similarly */}
        
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-next home1-service-arrow"></div>
      <div className="swiper-button-prev home1-service-arrow"></div>
    </div>
  );
};

export default ServiceSlider;
