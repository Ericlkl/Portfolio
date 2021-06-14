// Layout Components
import { BasicLayout } from '../components/Layout';
// Page Components
import { Content } from '../sections/404';

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
