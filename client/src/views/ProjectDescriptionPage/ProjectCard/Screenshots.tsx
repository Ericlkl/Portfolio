import React from 'react';
import Swiper from 'react-id-swiper';
import Section from './Section';
import 'swiper/swiper.scss';

type ScreenshotsProps = {
  screenshots: string[];
};

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 40, // Responsive breakpoints
    breakpoints: {
      // when window width is <= 650px
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      }, // when window width is <= 900px
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  };

  return (
    <Section title='Preview'>
      <div className='screenshots'>
        <Swiper {...params}>
          {screenshots.map((scrs, i) => (
            <div key={scrs} className='screenshot'>
              <img src={scrs} alt={`Project Screenshots ${i + 1}`} />
            </div>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Screenshots;
