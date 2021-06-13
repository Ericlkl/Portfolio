import React from 'react';

import styles from '../../styles/Layout/social_btns.module.scss';

const SocialMedia: React.FC = () => {
  return (
    <div className={styles['social-buttons']}>
      <a
        href="https://github.com/Ericlkl"
        className={
          styles['social-buttons__button'] +
          styles['social-button'] +
          styles['social-button--github']
        }
      >
        <span className={styles['social-button__inner']}>
          <i aria-hidden="true" className="fab fa-github" />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/kalonglee-eric/"
        className={
          styles['social-buttons__button'] +
          styles['social-button'] +
          styles['social-button--linkedin']
        }
      >
        <span className={styles['social-button__inner']}>
          <i aria-hidden="true" className="fab fa-linkedin-in" />
        </span>
      </a>
      <a
        href="https://www.facebook.com/raidenlkl"
        className={
          styles['social-buttons__button'] +
          styles['social-button'] +
          styles['social-button--facebook']
        }
      >
        <span className={styles['social-button__inner']}>
          <i aria-hidden="true" className="fab fa-facebook-f" />
        </span>
      </a>
      <a
        href="https://www.instagram.com/ericlkl3333/"
        className={
          styles['social-buttons__button'] +
          styles['social-button'] +
          styles['social-button--instagram']
        }
      >
        <span className={styles['social-button__inner']}>
          <i aria-hidden="true" className="fab fa-instagram" />
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;
