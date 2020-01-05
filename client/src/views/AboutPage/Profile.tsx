import React from 'react';
import { Fade } from 'react-reveal';
import ProfileImg from '../../assets/img/hero2.jpg';
import { Award } from '../../types';

// Logo
import AAS from '../../assets/img/logo/aas.png';
import CSIRO from '../../assets/img/logo/csiro.png';
import GU from '../../assets/img/logo/gu.png';
import QUT from '../../assets/img/logo/qut.png';

type AchievementBoxProps = {
  title: string;
  items: Award[];
};

const AchievementBox: React.FC<AchievementBoxProps> = ({ title, items }) => {
  return (
    <div className='myHistory_content_achievement_box'>
      <h4 className='myHistory_content_achievement_box_title'>{title}</h4>
      {items.map(i => (
        <div className='myHistory_content_achievement_box_item'>
          <img src={i.organization} alt='Company logo' />
          <p>{i.name}</p>
        </div>
      ))}
    </div>
  );
};

const achievements = [
  {
    title: 'Education',
    items: [
      {
        organization: GU,
        name: 'Bachelor of IT'
      },
      {
        organization: QUT,
        name: 'Bachelor of IT (Computer Science)'
      }
    ]
  },
  {
    title: 'Experience',
    items: [
      {
        organization: AAS,
        name: 'IT Tutor'
      },
      {
        organization: QUT,
        name: ' Mobile Application Developer Internship'
      },
      {
        organization: CSIRO,
        name: 'Medicial Search Engine Developer'
      }
    ]
  }
];

const Profile: React.FC = () => {
  const AchievementBoxs = achievements.map(achieve => (
    <AchievementBox
      key={achieve.title}
      title={achieve.title}
      items={achieve.items}
    />
  ));

  return (
    <section className='myHistory'>
      <h1 className='section_title'>Profile</h1>

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
              alt='Eric Lee'
            />
            {AchievementBoxs}
          </div>
        </Fade>

        {/* Section Right End*/}
      </div>
    </section>
  );
};

export default Profile;
