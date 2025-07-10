import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/AutoSlideShow.css'; 

const AutoSlideShow = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((src, index) => (
            console.log('image : ', src),
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSlideShow;
