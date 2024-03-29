// Basic Layout component
import { BasicLayout, PageHead } from 'components/common';
// Page Component
import {
  Header,
  Services,
  PersonalityGrid,
  FeatureProject,
} from 'components/pages/home';

// config data
import {
  headerInfo,
  personalities,
  services,
  featureProjectInfo,
} from 'constants/pages/home';

export async function getStaticProps() {
  return {
    props: {
      headerInfo,
      services,
    },
    revalidate: 60 * 60 * 12,
  };
}

const HomePage: React.FC<any> = ({ headerInfo, services }) => {
  return (
    <BasicLayout>
      <PageHead title="Software Engineer" />
      <Header headerInfo={headerInfo} />
      <PersonalityGrid personalities={personalities} />
      <Services services={services} />
      <FeatureProject projectInfo={featureProjectInfo} />
    </BasicLayout>
  );
};

export default HomePage;
