// Components
import Swiper from 'react-id-swiper';
import Section from './Section';

// Styles
import styles from '../../../../styles/pages/project/project_desc.module.scss';

// interfaces
import { ScreenshotsProps, ScreenshotProps } from 'interfaces/components/pages/project'

const params = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 40, // Responsive breakpoints
  breakpoints: {
    // when window width is <= 650px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    }, // when window width is <= 900px
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};

const Screenshot: React.FC<ScreenshotProps> = ({ screenshot }) => {
  return (
    <div key={screenshot.id} className={styles['screenshot']}>
      <img src={screenshot.url} alt={`Project Screenshots`} />
    </div>
  )
};

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
  const Screenshots = screenshots.map((screenshot, i) => (
    <Screenshot key={screenshot.id} screenshot={screenshot} />
  ));
  return (
    <Section title="Preview">
      <div className={styles['screenshots']}>
        <Swiper {...params}>{Screenshots}</Swiper>
      </div>
    </Section>
  );
};

export default Screenshots;
