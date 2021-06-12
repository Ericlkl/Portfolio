import React, { Fragment } from 'react';

import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
// Page Components
import PageComponents from '@/sections/404';
const { Content } = PageComponents;

const ErrorPage: React.FC = () => {
  return (
    <Fragment>
      <Navbar logoColor="blue" />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
