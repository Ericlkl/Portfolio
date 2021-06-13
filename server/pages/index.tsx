import React, { Fragment } from 'react';

// core components
import FeatureProject from '@/sections/HomePage/FeatureProject';

// Basic Layout component
import LayoutComponents from '@/components/Layout';
const { BasicLayout } = LayoutComponents;
// Page Component
import HomeComponents from '@/sections/HomePage';
const { Header, Services, Contact, PersonalityGrid } = HomeComponents;

const HomePage: React.FC = () => {
  return (
    <BasicLayout>
      <Header />
      <PersonalityGrid />
      <Services />
      <FeatureProject />
      <Contact />
    </BasicLayout>
  );
};

export default HomePage;
