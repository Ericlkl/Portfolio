import React, { Fragment } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import AboutBG from '../../assets/img/about_hero2.jpg';
import Footer from '../../components/Layout/Footer';
import PieChart from '../../components/PieChart';

const AboutPage: React.FC = () => {
  const myData = [
    {
      id: 'Eating Pizza',
      label: 'Eating Pizza',
      value: 50,
      color: 'hsl(185, 70%, 50%)'
    },
    {
      id: 'Thinking',
      label: 'Thinking',
      value: 222,
      color: 'hsl(222, 70%, 50%)'
    },
    {
      id: 'UI Design',
      label: 'UI Design',
      value: 175,
      color: 'hsl(20, 70%, 50%)'
    },
    {
      id: 'Researching',
      label: 'Researching',
      value: 300,
      color: 'hsl(253, 70%, 50%)'
    },
    {
      id: 'Developing Application (Web/Mobile)',
      label: 'Developing Application',
      value: 500,
      color: 'hsl(216, 70%, 50%)'
    }
  ];

  return (
    <Fragment>
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

      <div className='myLife'>
        <h3 className='section_title'>Work Distribution</h3>
        <div style={{ width: '100%', height: '400px' }}>
          <PieChart data={myData} />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AboutPage;
