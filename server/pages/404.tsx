import LayoutComponents from '@/components/Layout';
const { BasicLayout } = LayoutComponents;
// Page Components
import PageComponents from '@/sections/404';
const { Content } = PageComponents;

const ErrorPage: React.FC = () => {
  return (
    <BasicLayout>
      <Content />
    </BasicLayout>
  );
};

export default ErrorPage;
