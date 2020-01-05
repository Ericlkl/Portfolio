import React, { Fragment } from 'react';

import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

const ErrorPage: React.FC = () => {
  return (
    <Fragment>
      <Navbar logoColor='blue' />
      <section className='notfound'>
        <div className='notfound_content container'>
          <h4 className='notfound_content_oops'>OOPS! Page Not Found</h4>
          <h1 className='notfound_content_404'>404</h1>
          <h4 className='notfound_content_sorry'>
            THE PAGE YOU REQUESTED WAS NOT FOUND!
          </h4>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
