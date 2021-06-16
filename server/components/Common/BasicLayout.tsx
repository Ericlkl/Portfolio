import { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BasicLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Navbar logoColor="teal" />
      {children}
      <Footer />
    </Fragment>
  );
};

export default BasicLayout;
