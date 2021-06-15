import React, { Fragment } from 'react';
import { Fab } from '@material-ui/core';

import styles from '../../styles/layout/footer.module.scss';

const Footer: React.FC = () => {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={`${styles.footer_content} container`}>
          <div className={styles.footer_content_contactbox}>
            <h2 className={`${styles.footer_content_contactbox_title} bold`}>
              Let's Work Together
            </h2>
            <h3 className={styles.footer_content_contactbox_subtitle}>
              Have a project you'd like to discuss?
            </h3>
            <Fab
              style={{ margin: '1.5rem auto' }}
              variant="extended"
              color="primary"
              aria-label="add"
            >
              Contact Me!
            </Fab>
          </div>

          <div className={styles.footer_content_methods}>
            <div className={styles.footer_content_methods_method}>
              <a href="mailto:ericlkl@gmail.com">
                <i aria-hidden="true" className="far fa-envelope" />
                Ericlkl.au@gmail.com
              </a>
            </div>
            <div className={styles.footer_content_methods_method}>
              <a href="https://www.facebook.com/raidenlkl">
                <i aria-hidden="true" className="fab fa-facebook-square" /> On
                Facebook
              </a>
            </div>
            <div className={styles.footer_content_methods_method}>
              <a href="https://www.linkedin.com/in/kalonglee-eric/">
                <i aria-hidden="true" className="fab fa-linkedin" /> On linkedin
              </a>
            </div>
            <div className={styles.footer_content_methods_method}>
              <a href="https://www.instagram.com/ericlkl3333/">
                <i aria-hidden="true" className="fab fa-instagram" /> On
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer_copyright}>
          <h4>Developed By Eric LEE &copy; All Right Reserved</h4>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
