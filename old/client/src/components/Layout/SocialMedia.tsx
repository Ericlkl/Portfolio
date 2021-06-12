import React from 'react';

const SocialMedia: React.FC = () => {
  return (
    <div className='social-buttons'>
      <a
        href='https://github.com/Ericlkl'
        className='social-buttons__button social-button social-button--github'
      >
        <span className='social-button__inner'>
          <i className='fab fa-github' />
        </span>
      </a>
      <a
        href='https://www.linkedin.com/in/kalonglee-eric/'
        className='social-buttons__button social-button social-button--linkedin'
      >
        <span className='social-button__inner'>
          <i className='fab fa-linkedin-in' />
        </span>
      </a>
      <a
        href='https://www.facebook.com/raidenlkl'
        className='social-buttons__button social-button social-button--facebook'
      >
        <span className='social-button__inner'>
          <i className='fab fa-facebook-f' />
        </span>
      </a>
      <a
        href='https://www.instagram.com/ericlkl3333/'
        className='social-buttons__button social-button social-button--instagram'
      >
        <span className='social-button__inner'>
          <i className='fab fa-instagram' />
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;
