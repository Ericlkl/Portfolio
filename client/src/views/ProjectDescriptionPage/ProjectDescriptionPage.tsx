import React, { Fragment } from 'react';

// core components
// Assests
import ProjectBG from '../../assets/img/project_bg.jpg';
import UI_IMG from '../../assets/img/tweetery_UI.jpg';
// Public Components
import Navbar from '../../components/Layout/Navbar';
import Jumbotron from '../../components/Layout/Jumbotron';
import Footer from '../../components/Layout/Footer';
import Carousel from '../../components/Layout/Carousel';

const ProjectCardHeader = () => {
  return (
    <div className='project_desc_card_header'>
      <div className='project_desc_card_header_left'>
        <img
          className='project_desc_card_header_left_logo'
          src='https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1519121/910/607/m1/fpnw/wm0/prew4-.jpg?1470218072&s=1f40781a2a8d937f848ba6abd5a77568'
          alt='project_logo'
        />
      </div>
      <div className='project_desc_card_header_right'>
        <h1 className='project_desc_card_header_right_title'>
          Application Name
        </h1>
        <h3 className='project_desc_card_header_right_subtitle'>
          Application Name
        </h3>
        <div className='project_desc_card_header_right_platforms'>
          <div className='project_desc_card_header_right_platforms_platform'>
            <i className='fas fa-globe-asia' /> Website
          </div>
        </div>
      </div>
    </div>
  );
};

type ProjectCardSectionProps = {
  title: string;
};

const ProjectCardSection: React.FC<ProjectCardSectionProps> = ({
  title,
  children
}) => {
  return (
    <div className='project_desc_card_section'>
      <h1 className='project_desc_card_section_title'>{title}</h1>
      {children}
    </div>
  );
};

const ProfilePage: React.FC = () => {
  return (
    <Fragment>
      <Navbar logoColor='teal' />
      <Jumbotron
        title='Projects'
        subtitle='All Projects are made with heart'
        backgroundIMG={ProjectBG}
      />

      <section className='project_desc'>
        <div className='project_desc_card material_card'>
          <ProjectCardHeader />
          <ProjectCardSection title='Introduction'>
            <p className='project_desc_card_section_content'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea et in
              molestias a corporis vel laboriosam officiis deserunt nostrum
              molestiae tenetur, nobis necessitatibus praesentium, voluptatibus
              dolore fugiat sit laborum ducimus.
            </p>
          </ProjectCardSection>
          <ProjectCardSection title='Preview'>
            <Carousel>
              <div className='project_gallery_slide'>
                <img
                  className='project_gallery_slide_img'
                  src={UI_IMG}
                  alt='ui img'
                />
              </div>
              <div className='project_gallery_slide'>
                <img
                  className='project_gallery_slide_img'
                  src={UI_IMG}
                  alt='ui img'
                />
              </div>
              <div className='project_gallery_slide'>
                <img
                  className='project_gallery_slide_img'
                  src={UI_IMG}
                  alt='ui img'
                />
              </div>
              <div className='project_gallery_slide'>
                <img
                  className='project_gallery_slide_img'
                  src={UI_IMG}
                  alt='ui img'
                />
              </div>
              <div className='project_gallery_slide'>
                <img
                  className='project_gallery_slide_img'
                  src={UI_IMG}
                  alt='ui img'
                />
              </div>
            </Carousel>
          </ProjectCardSection>
          <ProjectCardSection title='Information' />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
