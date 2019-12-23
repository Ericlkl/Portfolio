import React, { Fragment } from 'react';

// core components
import Hero from '../../components/Layout/Hero';
import ContactBG from '../../assets/img/contact_hero.jpg';
import Footer from '../../components/Layout/Footer';

const ContactPage: React.FC = ({ ...rest }) => {
  return (
    <Fragment>
      <Hero img={ContactBG} title='Contact Me' />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
