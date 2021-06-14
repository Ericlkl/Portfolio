// Basic Layout component
import { BasicLayout } from '../components/layout';
// Page Component
import {
  Header,
  Services,
  Contact,
  PersonalityGrid,
  FeatureProject,
} from '../components/pages/HomePage';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}

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
