import React, { Fragment } from 'react';
import { Fab } from '@material-ui/core';
const Footer: React.FC = () => {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer_content'>
          <div className='footer_content_contactbox'>
            <h2 className='footer_content_contactbox_title bold'>
              Let's Work Together
            </h2>
            <h3 className='footer_content_contactbox_subtitle'>
              Have a project you'd like to discuss?
            </h3>
            <Fab
              style={{ margin: '1.5rem auto' }}
              variant='extended'
              color='primary'
              aria-label='add'
            >
              Contact Me!
            </Fab>
          </div>

          <div className='footer_content_methods'>
            <div className='footer_content_methods_method'>
              <i className='far fa-envelope' /> Ericlkl.au@gmail.com
            </div>
            <div className='footer_content_methods_method'>
              <i className='fab fa-facebook-square' /> On Facebook
            </div>
            <div className='footer_content_methods_method'>
              <i className='fab fa-linkedin' /> On linkedin
            </div>
            <div className='footer_content_methods_method'>
              <i className='fab fa-instagram' /> On Instagram
            </div>
          </div>
        </div>

        <div className='footer_copyright'>
          <h4>Developed By Eric LEE &copy; All Right Reserved</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
