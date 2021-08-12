// config data
import { myImages } from 'constants/pages';
// interfaces
import { FrameProps } from 'interfaces/components/pages/about';

import styles from 'styles/common/hero.module.scss';

// Todo: To fix the scss file to different files later

const Frame: React.FC<FrameProps> = ({ url, description }) => {
  return (
    <div className={styles.hero_gallery_frame}>
      <img
        className={styles.hero_gallery_frame_img}
        src={url}
        alt={description}
      />
    </div>
  );
};

const MyImages: React.FC = () => {
  const frames = myImages.map((image) => (
    <Frame
      key={image.description}
      url={image.url}
      description={image.description}
    />
  ));

  return <div className={styles.hero_gallery}>{frames}</div>;
};

export default MyImages;
