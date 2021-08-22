// Layout Components
import { BasicLayout, PageHead } from '../components/common';
// Page Components
import { Content } from '../components/pages/404';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
}

const ErrorPage: React.FC = () => {
  return (
    <BasicLayout>
      <PageHead title="Content Not Found!"/>
      <Content />
    </BasicLayout>
  );
};

export default ErrorPage;
