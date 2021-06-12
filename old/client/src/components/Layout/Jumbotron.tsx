import React from 'react';

type JumbotronProps = {
  title: string;
  subtitle: string;
  backgroundIMG: string;
};

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  subtitle,
  backgroundIMG,
  children
}) => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(13, 37, 56, 0.85), rgba(13, 37, 56, 0.85)),
      url(${backgroundIMG})`
      }}
      className='jumbotron'
    >
      <h1 className='jumbotron_title'>{title}</h1>
      <h2 className='jumbotron_subtitle'>{subtitle}</h2>
      {children}
    </section>
  );
};

export default Jumbotron;
