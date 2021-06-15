import React from 'react';

type JumbotronProps = {
  title: string;
  subtitle: string;
  backgroundIMG: string;
};
import styles from '../../styles/layout/jumbotron.module.scss';
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
      url(${backgroundIMG})`,
      }}
      className={styles.jumbotron}
    >
      <h1 className={styles.jumbotron_title}>{title}</h1>
      <h2 className={styles.jumbotron_subtitle}>{subtitle}</h2>
      {children}
    </section>
  );
};

export default Jumbotron;
