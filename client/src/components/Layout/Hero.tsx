import React from 'react';

type HeroProps = {
  img: string;
  title: string;
  subtitle?: string;
  desc?: string;
};

const Hero: React.FC<HeroProps> = ({
  img,
  title,
  subtitle,
  desc,
  children
}) => {
  return (
    <div className='hero'>
      <div className='hero_content'>
        <div className='hero_content_description'>
          <h1 className='hero_content_description_title'>{title}</h1>
          <p className='hero_content_description_subtitle'>{subtitle}</p>
          <p className='hero_content_description_desc'>{desc}</p>
        </div>

        <img className='hero_content_img' src={img} alt='hero_img' />
      </div>
      {children}
    </div>
  );
};

export default Hero;
