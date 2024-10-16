import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const AboutSwiper = () => {
  const slides = [
    {
      imgSrc: "images/team/team02.jpg",
      name: "Elaine Chao",
      position: "Founder",
      socials: {
        facebook: "#",
        twitter: "#",
        youtube: "#",
        linkedin: "#",
      },
    },
    {
      imgSrc: "images/team/team-01.jpg",
      name: "Novalee Spicer",
      position: "President",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      imgSrc: "images/team/team03.jpg",
      name: "Dianna Smiley",
      position: "Youth Wing",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <Swiper
      modules={[Navigation]} // Include navigation module for arrows
      spaceBetween={30}
      slidesPerView={3}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Enable arrows
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <article className="pbmit-team-style-1">
            <div className="pbminfotech-post-item">
              <div className="pbminfotech-team-image-box">
                <div className="pbmit-featured-wrapper">
                  <img src={slide.imgSrc} className="img-fluid w-100" alt="" />
                </div>
                <div className="pbminfotech-social-overlaybox">
                  <div className="pbminfotech-box-content">
                    <div className="pbminfotech-box-content-inner">
                      <h3 className="pbmit-team-title">
                        <a href="candidate-details.html">{slide.name}</a>
                      </h3>
                      <div className="pbminfotech-team-position">
                        <div className="pbminfotech-box-team-position">
                          {slide.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pbminfotech-social-innerbox">
                  <div className="pbminfotech-box-social-links">
                    <ul className="pbmit-social-links pbmit-team-social-links">
                      <li className="pbmit-social-li pbmit-social-facebook">
                        <a href={slide.socials.facebook} title="Facebook" target="_blank" rel="noreferrer">
                          <span><i className="pbmit-base-icon-facebook-squared"></i></span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-twitter">
                        <a href={slide.socials.twitter} title="Twitter" target="_blank" rel="noreferrer">
                          <span><i className="pbmit-base-icon-twitter"></i></span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-youtube">
                        <a href={slide.socials.youtube} title="Youtube" target="_blank" rel="noreferrer">
                          <span><i className="pbmit-base-icon-youtube-play"></i></span>
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-linkedin">
                        <a href={slide.socials.linkedin} title="LinkedIn" target="_blank" rel="noreferrer">
                          <span><i className="pbmit-base-icon-linkedin-squared"></i></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}

      {/* Navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default AboutSwiper;
