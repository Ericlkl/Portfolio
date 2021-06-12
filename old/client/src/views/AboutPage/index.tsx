import React, { Fragment, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

// core components
import Hero from './Hero';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import MySkills from './MySkills';
import Profile from './Profile';

// Lightbox setting
const options = {
  transitionTimingFunction: 'ease',
  slideTransitionSpeed: 1000,
  buttonsIconPadding: '2px',
  enablePanzoom: true,
  hideControlsAfter: 1000
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar logoColor='grey' />
      <SRLWrapper options={options}>
        <Hero
          img='https://i.imgur.com/njGf0mh.jpg?3'
          desc="I enjoy developing simple and beautiful application to solve complex problems. When I'm not coding, watching movies or reading books, you'll find me thinking, swimming or enjoying sunshine in Gold Coast."
          title='About Me'
          subtitle="I'm a software engineer based in Brisbane, Australia."
        >
          <div className='hero_gallery'>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src='https://i.imgur.com/rewQMvS.jpg?1'
                alt='Watching Sunrise'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src='https://i.imgur.com/vPNpWCz.jpg?1'
                alt='Me and My Family'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src='https://i.imgur.com/Rg0Oi2E.jpg?1'
                alt='Me and My Brother'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src='https://i.imgur.com/exdawwf.jpg?1'
                alt='Me and My Parents'
              />
            </div>
          </div>
        </Hero>

        <Profile />
      </SRLWrapper>
      <MySkills />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
