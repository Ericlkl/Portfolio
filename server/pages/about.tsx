// core components
import { BasicLayout, PageHead } from 'components/common';
import {
  Hero,
  Skills,
  Profile,
  Gallery
} from 'components/pages/about';

// constant 
import { headerInfo, skillBoxData } from 'constants/pages/about'

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
}

const AboutPage: React.FC = () => {
  return (
    <BasicLayout>
      <PageHead title="About Me" />
      <Hero
        img={headerInfo.mainImage.url}
        desc={headerInfo.description}
        title="About Me"
        subtitle={headerInfo.highLight}
      >
        <Gallery images={headerInfo.otherImages} />
      </Hero>
      <Profile />
      <Skills skills={skillBoxData}/>
    </BasicLayout>
  );
};

export default AboutPage;
