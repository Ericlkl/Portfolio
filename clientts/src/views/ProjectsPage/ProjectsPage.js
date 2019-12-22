import React, { Fragment } from 'react';

// core components
import Projects from '../../components/Layout/Projects';
import Footer from '../../components/Layout/Footer';

const ProfilePage = ({ ...rest }) => {
  return (
    <Fragment>
      <Projects title='My Projects'>
        <h1>Hello World</h1>
      </Projects>
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
