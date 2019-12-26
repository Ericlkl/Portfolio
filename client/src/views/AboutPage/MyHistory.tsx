import React from 'react';
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
        <p className='myHistory_content_achievement_box_item'>- {i}</p>
      ))}
    </div>
  );
};

const achievements = [
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

const MyHistory: React.FC = () => {
  const renderAchievementBoxs = () =>
    achievements.map(achieve => (
      <AchievementBox title={achieve.title} items={achieve.items} />
    ));

  return (
    <section className='myHistory'>
      <h1 className='section_title'>Intro</h1>

      <div className='myHistory_content container'>
        {/* Section Left */}
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
        {/* Left Section end */}

        {/* Section Right */}
        <div className='myHistory_content_achievement'>
          <img
            className='myHistory_content_achievement_profile_img'
            src={ProfileImg}
            alt='my_pic'
          />
          {renderAchievementBoxs()}
        </div>
        {/* Section Right End*/}
      </div>
    </section>
  );
};

export default MyHistory;
