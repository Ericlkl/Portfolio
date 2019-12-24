import React from 'react';
import Slider from 'react-slick';

type CarouselProps = {
  dots: boolean;
  centerMode: boolean;
  slidesToShow: number;
};

const Carousel: React.FC<CarouselProps> = ({
  dots,
  centerMode,
  slidesToShow,
  children
}) => {
  const settings = {
    dots,
    centerMode,
    centerPadding: '60px',
    slidesToShow,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
