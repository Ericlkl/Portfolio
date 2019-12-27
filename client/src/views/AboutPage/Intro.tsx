import React from 'react';
import { Fade } from 'react-reveal';
import ProfileImg from '../../assets/img/hero2.jpg';

type AchievementBoxProps = {
  title: string;
  items: string[];
};

const AchievementBox: React.FC<AchievementBoxProps> = ({ title, items }) => {
  return (
    <div className='myHistory_content_achievement_box'>
      <h4 className='myHistory_content_achievement_box_title'>{title}</h4>
      {items.map(i => (
        <h6 className='myHistory_content_achievement_box_item'>- {i}</h6>
      ))}
    </div>
  );
};

const achievements = [
  {
    title: 'Education',
    items: [
      'Griffith Uni - Bachelor of IT | 2016 - 2017',
      'Queensland University of Technology - Bachelor of Computer Science | 2017 - 2019'
    ]
  },
  {
    title: 'Awards and Mentions',
    items: ['Griffith University - Awards', 'Griffith University - Awards']
  },
  {
    title: 'Experience',
    items: [
      'AAS Education - IT Tutors',
      'QUT - Mobile Application Developer Internship',
      'CSIRO - Medicial Search Engine Developer'
    ]
  }
];

const Intro: React.FC = () => {
  const renderAchievementBoxs = () =>
    achievements.map(achieve => (
      <AchievementBox title={achieve.title} items={achieve.items} />
    ));

  return (
    <section className='myHistory'>
      <h1 className='section_title'>Intro</h1>

      <div className='myHistory_content container'>
        {/* Section Left */}
        <Fade bottom>
          <div className='myHistory_content_intro'>
            <h2 className='myHistory_content_intro_name'>Eric Lee</h2>
            <p className='myHistory_content_intro_p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              enim atque soluta eum. At quos est voluptates eum voluptatem qui
              facere enim eaque dolorum fugiat. Minima culpa reiciendis quasi
              esse.
            </p>
            <p className='myHistory_content_intro_p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at
              voluptatem similique, maiores mollitia ipsam voluptate hic.
              Exercitationem eveniet enim accusantium totam a quos consequatur
              maiores numquam! Sed, officiis ducimus.
            </p>
          </div>
        </Fade>

        {/* Left Section end */}

        {/* Section Right */}
        <Fade bottom>
          <div className='myHistory_content_achievement'>
            <img
              className='myHistory_content_achievement_profile_img'
              src={ProfileImg}
              alt='my_pic'
            />
            {renderAchievementBoxs()}
          </div>
        </Fade>

        {/* Section Right End*/}
      </div>
    </section>
  );
};

export default Intro;
