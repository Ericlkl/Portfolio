import React, { Fragment, useEffect } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import AboutBG from '../../assets/img/about_hero2.jpg';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Layout/Navbar';
import MySkills from './MySkills';
import Profile from './Profile';
import Personality from './Personality';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Navbar logoColor='grey' />
      <Hero
        img={AboutBG}
        desc="I enjoy developing simple and beautiful application to solve complex problems. When I'm not coding, watching movies or reading books, you'll find me thinking, swimming or enjoying sunshine in Gold Coast."
        title='About Me'
        subtitle="I'm a software engineer based in Brisbane, Australia."
      >
        <div className='hero_gallery'>
          <div className='hero_gallery_frame'>
            <img className='hero_gallery_frame_img' src={AboutBG} alt='myImg' />
          </div>
          <div className='hero_gallery_frame'>
            <img className='hero_gallery_frame_img' src={AboutBG} alt='myImg' />
          </div>
          <div className='hero_gallery_frame'>
            <img className='hero_gallery_frame_img' src={AboutBG} alt='myImg' />
          </div>
          <div className='hero_gallery_frame'>
            <img className='hero_gallery_frame_img' src={AboutBG} alt='myImg' />
          </div>
          <div className='hero_gallery_frame'>
            <img className='hero_gallery_frame_img' src={AboutBG} alt='myImg' />
          </div>
          <div className='hero_gallery_frame'>
            <img className='hero_gallery_frame_img' src={AboutBG} alt='myImg' />
          </div>
        </div>
      </Hero>
      <Profile />
      <Personality />
      <MySkills />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
