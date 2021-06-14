// Components
import Swiper from 'react-id-swiper';
import Section from './Section';

// Interfaces
import { ProjectScreenshots } from '../../../../interfaces';

interface ScreenshotsProps {
  screenshots: ProjectScreenshots[];
}

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

import styles from '../../../../styles/pages/ProjectPage/project_desc.module.scss';

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
  const Screenshots = screenshots.map((screenshot, i) => (
    <div key={screenshot.id} className={styles['screenshot']}>
      <img src={screenshot.url} alt={`Project Screenshots ${i + 1}`} />
    </div>
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
