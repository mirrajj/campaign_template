import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const SliderComponent = () => {
    const[emblaRef] = useEmblaCarousel({loop:true},[Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
        <div className="overlay"></div>
        <div className="embla__container">
        <div className="embla__slide">
            <div class="embla__slide__container">
            <img src="revolution/images/ernest02.png" alt="" />
            <div class="hero-text">
                <h1>Together We Will Move The Country Forward</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolores pariatur et numquam. Facilis, earum.!
                </p>
                <button>Join Now</button>
            </div>
            </div>
        </div>
        <div className="embla__slide">
            <div class="embla__slide__container">
            <img src="revolution/images/slider-img-01.png" alt="" />
            <div class="hero-text">
                <h1>Your perfect coffee experience</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde illo placeat id, aliquid vitae illum.
                </p>
                <button>Join Now</button>
            </div>
            </div>
        </div>
        <div className="embla__slide">
            <div class="embla__slide__container">
            <img src="revolution/images/slider-img-01.png" alt="" />
            <div class="hero-text">
                <h1>Your perfect coffee experience</h1>
                <p>Indulge in artisanal coffee delights. Crafted with passion, brewed with perfection.
                Savor the Flavor!
                </p>
                <button>Order Now</button>
            </div>
            </div>
        </div>
        
   
    </div>
    </div>
  );
};

export default SliderComponent;
