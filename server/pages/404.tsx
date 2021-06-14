// Layout Components
import { BasicLayout } from '../components/layout';
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
      <Content />
    </BasicLayout>
  );
};

export default ErrorPage;
