import React, { useState, useEffect } from 'react';
import TextLoop from 'react-text-loop';
import Particle from '../../common/Particle';
// import SocialMedia from '../../components/Layout/SocialMedia';

// Styles
import styles from 'styles/pages/home/header.module.scss';

// Interfaces
import { HeaderProps } from 'interfaces/components/pages/home'

const Header: React.FC<HeaderProps> = ({ headerInfo }) => {
  
  const JobTitles = headerInfo.jobTitles.map(
    (title) => 
    <h2 key={title} className={styles.header_content_info_highlight_title}>
      {title}
    </h2>
  );

  return (
    <header className={styles.header}>
      <Particle />
      <div className={`${styles.header_content} container`}>
        <div className={styles.header_content_profile}>
          <img src={headerInfo.avator.url} alt={headerInfo.avator.alt} />
        </div>

        <div className={styles.header_content_info}>
          <div className={styles.header_content_info_highlight}>
            <h2 className={styles.header_content_info_highlight_name}>
              {headerInfo.name}
            </h2>

            <TextLoop>
              {JobTitles}
            </TextLoop>
          </div>
          <h3 className={styles.header_content_info_desc}>
            { headerInfo.highlight }
          </h3>
          {/* <SocialMedia /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
