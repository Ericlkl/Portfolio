import React from 'react';
import UI_IMG from '../../../assets/img/tweetery_UI.jpg';
import Carousel from '../../../components/Layout/Carousel';

type ScreenshotProps = {
  imgSrc: string;
};

const Screenshot: React.FC<ScreenshotProps> = ({ imgSrc }) => {
  return (
    <div className='project_gallery_slide'>
      <img className='project_gallery_slide_img' src={imgSrc} alt='ui img' />
    </div>
  );
};

const Screenshots: React.FC = () => {
  return (
    <Carousel>
      <Screenshot imgSrc={UI_IMG} />
      <Screenshot imgSrc={UI_IMG} />
      <Screenshot imgSrc={UI_IMG} />
      <Screenshot imgSrc={UI_IMG} />
      <Screenshot imgSrc={UI_IMG} />
      <Screenshot imgSrc={UI_IMG} />
      <Screenshot imgSrc={UI_IMG} />
    </Carousel>
  );
};

export default Screenshots;
