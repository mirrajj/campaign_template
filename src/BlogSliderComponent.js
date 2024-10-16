import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const BlogSliderComponent = () => {
  const slides = [
    {
      imgSrc: "images/blog/blog02.jpg",
      date: "20",
      month: "Jul",
      category: "Politics",
      author: "admin",
      comments: "1 Comments",
      title: "Principle stability in the future with activity",
      description: "The point of using is that it has a more-or-less normal distribution of letters, as opposed to using making it…",
      link: "blog-details.html",
    },
    {
      imgSrc: "images/blog/blog03.jpg",
      date: "10",
      month: "Jun",
      category: "Press",
      author: "admin",
      comments: "1 Comments",
      title: "How to invent a law & pass it in parliament",
      description: "The point of using is that it has a more-or-less normal distribution of letters, as opposed to using making it…",
      link: "blog-details.html",
    },
    {
      imgSrc: "images/blog/blog04.jpg",
      date: "31",
      month: "May",
      category: "Statement",
      author: "admin",
      comments: "1 Comments",
      title: "Our humanity of Preparing Youth for Success",
      description: "The point of using is that it has a more-or-less normal distribution of letters, as opposed to using making it…",
      link: "blog-details.html",
    },
    {
      imgSrc: "images/blog/blog04.jpg",
      date: "31",
      month: "May",
      category: "Statement",
      author: "admin",
      comments: "1 Comments",
      title: "Our humanity of Preparing Youth for Success",
      description: "The point of using is that it has a more-or-less normal distribution of letters, as opposed to using making it…",
      link: "blog-details.html",
    },
    {
      imgSrc: "images/blog/blog04.jpg",
      date: "31",
      month: "May",
      category: "Statement",
      author: "admin",
      comments: "1 Comments",
      title: "Our humanity of Preparing Youth for Success",
      description: "The point of using is that it has a more-or-less normal distribution of letters, as opposed to using making it…",
      link: "blog-details.html",
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      dots={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <article className="pbmit-blog-style-2 politics pbmit-odd pbmit-col-odd">
            <div className="post-item">
              <div className="pbmit-featured-container">
                <div className="pbmit-featured-wrapper">
                  <img src={slide.imgSrc} className="img-fluid w-100" alt="" />
                </div>
                <div className="pbmit-meta-date-wrapper">
                  <span className="pbmit-date">{slide.date}</span>
                  <span className="pbmit-month">{slide.month}</span>
                </div>
              </div>
              <div className="pbminfotech-box-content">
                <div className="pbmit-meta-container">
                  <div className="pbmit-meta-category pbmit-meta-line">
                    <i className="pbmit-base-icon-bookmark"></i>
                    <a href="blog-classic.html" rel="category tag">
                      {slide.category}
                    </a>
                  </div>
                  <div className="pbmit-meta-author-wrapper pbmit-meta-line">
                    <a href="#" title="Posted by admin" rel="author">
                      <i className="pbmit-base-icon-user-circle"></i> by {slide.author}
                    </a>
                  </div>
                  <div className="pbmit-meta-comment-wrapper pbmit-meta-line">
                    <span className="pbmit-meta pbmit-meta-comments">
                      <i className="pbmit-base-icon-comment"></i> {slide.comments}
                    </span>
                  </div>
                </div>
                <h3 className="pbmit-post-title">
                  <a href={slide.link}>{slide.title}</a>
                </h3>
                <div className="pbminfotech-box-desc">
                  {slide.description}
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSliderComponent;
