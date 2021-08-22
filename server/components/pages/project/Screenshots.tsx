// Components
import Section from './Section';
import Slider from 'react-slick';

// Styles
import styles from 'styles/pages/project/project_desc.module.scss';

// interfaces
import {
  ScreenshotsProps,
  ScreenshotProps,
} from 'interfaces/components/pages/project';

const Screenshot: React.FC<ScreenshotProps> = ({ screenshot }) => {
  return (
    <div key={screenshot.id} className={styles['screenshot']}>
      <img src={screenshot.url} alt={`Project Screenshots`} />
    </div>
  );
};

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
  const Screenshots = screenshots.map((screenshot, i) => (
    <Screenshot key={screenshot.id} screenshot={screenshot} />
  ));
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section title="Preview">
      <div className={styles['screenshots']}>
        <Slider {...settings}>{Screenshots}</Slider>
      </div>
    </Section>
  );
};

export default Screenshots;
