import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className='footer'>
        <h2 className='footer_title bold'>Contact Me</h2>

        <div className='footer_socials'>
          <i className='fab fa-facebook-square fa-3x' />
          <i className='fab fa-instagram fa-3x' />
          <i className='fab fa-linkedin fa-3x' />
          <i className='fab fa-github-square fa-3x' />
        </div>

        <div className='footer_copyright'>
          <div className='footer_copyright_links'>
            <h4>Eric lee</h4>
            <h4>About</h4>
            <h4>Projects</h4>
            <h4>Contact</h4>
          </div>
          <h4>Developed By Eric LEE &copy; All Right Reserved</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
