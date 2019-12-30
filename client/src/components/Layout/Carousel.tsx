import React from 'react';
import Slider from 'react-slick';

const Carousel: React.FC = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
