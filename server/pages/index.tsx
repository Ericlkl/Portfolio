// Basic Layout component
import { BasicLayout, PageHead } from 'components/common';
// Page Component
import {
  Header,
  Services,
  Contact,
  PersonalityGrid,
  FeatureProject,
} from 'components/pages/home';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}

const HomePage: React.FC = () => {
  return (
    <BasicLayout>
      <PageHead title="Software Engineer" />
      <Header />
      <PersonalityGrid />
      <Services />
      <FeatureProject />
      <Contact />
    </BasicLayout>
  );
};

export default HomePage;
