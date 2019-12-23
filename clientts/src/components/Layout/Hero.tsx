import React from 'react';

type HeroProps = {
  img: string;
  title?: string;
  subtitle?: string;
};

const Hero: React.FC<HeroProps> = ({ img, title, subtitle }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url('${img}')`
      }}
      className='hero'
    >
      <h1 className='hero_title'>{title}</h1>
    </div>
  );
};

export default Hero;
