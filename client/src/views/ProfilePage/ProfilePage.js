import React, { Fragment } from 'react';

// core components
import Navbar from './Navbar';
import FeatureProject from './FeatureProject';
import Hero from './Hero';
import Services from './Services';
import RecentProjects from './RecentProjects';
import Footer from './Footer';

{
  /* <div className={classes.right}>
&copy; {1900 + new Date().getYear()} , Designed and Developed by{' '}
<a
  href='https://www.creative-tim.com?ref=mkpr-profile'
  target='_blank'
>
  Eric Lee
</a>
</div> */
}
const ProfilePage = ({ ...rest }) => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Services />
      <FeatureProject />
      <RecentProjects />
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
