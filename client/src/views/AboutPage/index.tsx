import React, { Fragment, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

// core components
import Hero from './Hero';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import MySkills from './MySkills';
import Profile from './Profile';
import Personality from './Personality';

// Images
import My_Family from '../../assets/img/mypictures/My_Whole_Family.jpg';
import My_Gf from '../../assets/img/mypictures/I_and_MyGF_Selfie.jpg';
import Me_GC from '../../assets/img/mypictures/Me_Enjoying_Sunshire.jpg';
import My_Bro from '../../assets/img/mypictures/My_Brothers.jpg';
import My_Parents from '../../assets/img/mypictures/My_Parents.jpg';

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
          img={My_Gf}
          desc="I enjoy developing simple and beautiful application to solve complex problems. When I'm not coding, watching movies or reading books, you'll find me thinking, swimming or enjoying sunshine in Gold Coast."
          title='About Me'
          subtitle="I'm a software engineer based in Brisbane, Australia."
        >
          <div className='hero_gallery'>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src={Me_GC}
                alt='Watching Sunrise'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src={My_Family}
                alt='Me and My Family'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src={My_Bro}
                alt='Me and My Brother'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src={My_Parents}
                alt='Me and My Parents'
              />
            </div>
            {/* <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src={AboutBG}
                alt='myImg'
              />
            </div>
            <div className='hero_gallery_frame'>
              <img
                className='hero_gallery_frame_img'
                src={AboutBG}
                alt='myImg'
              />
            </div> */}
          </div>
        </Hero>

        <Profile />
        <Personality />
      </SRLWrapper>
      <MySkills />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
