import React, { useState, useEffect } from 'react';
import TextLoop from 'react-text-loop';
import Particle from './Particle';
// import SocialMedia from '../../components/Layout/SocialMedia';

// Styles
import styles from '../../styles/pages/HomePage/header.module.scss';

const Header: React.FC = () => {
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (jobIndex === 2) setJobIndex(0);
      else setJobIndex(jobIndex + 1);
    }, 4000);

    //eslint-disable-next-line
  }, [jobIndex]);

  return (
    <header className={styles.header}>
      <Particle />
      <div className={`${styles.header_content} container`}>
        <div className={styles.header_content_profile}>
          <img src={'img/profile_small.jpg'} alt="eric_profile" />
        </div>

        <div className={styles.header_content_info}>
          <div className={styles.header_content_info_highlight}>
            <h2 className={styles.header_content_info_highlight_name}>
              Eric lee,
            </h2>

            <TextLoop>
              <h2 className={styles.header_content_info_highlight_title}>
                JavaScript Developer
              </h2>
              <h2 className={styles.header_content_info_highlight_title}>
                Full Stack Developer
              </h2>
              <h2 className={styles.header_content_info_highlight_title}>
                Mobile App Developer
              </h2>
            </TextLoop>
          </div>
          <h3 className={styles.header_content_info_desc}>
            I’m a software engineer with a passion for addressing people's
            problem.
          </h3>
          {/* <SocialMedia /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
