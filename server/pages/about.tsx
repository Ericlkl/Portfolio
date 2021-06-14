// core components
import { BasicLayout } from '../components/layout';
import {
  Hero,
  MySkills,
  Profile,
  MyImages,
} from '../components/pages/AboutPage';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
}

const AboutPage: React.FC = () => {
  return (
    <BasicLayout>
      <Hero
        img="https://i.imgur.com/njGf0mh.jpg?3"
        desc="I enjoy developing simple and beautiful application to solve complex problems. When I'm not coding, watching movies or reading books, you'll find me swimming or enjoying sunshine in Gold Coast."
        title="About Me"
        subtitle="I'm a software engineer based in Hong Kong."
      >
        <MyImages />
      </Hero>
      <Profile />
      <MySkills />
    </BasicLayout>
  );
};

export default AboutPage;
