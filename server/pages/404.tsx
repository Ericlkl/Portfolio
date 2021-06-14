import LayoutComponents from '@/components/Layout';
const { BasicLayout } = LayoutComponents;
// Page Components
import PageComponents from '@/sections/404';
const { Content } = PageComponents;

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
