import React from 'react';
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
    <div className='profile_content_achievement_box'>
      <h4 className='profile_content_achievement_box_title'>{title}</h4>
      {items.map(i => (
        <div className='profile_content_achievement_box_item'>
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
    <section className='profile'>
      <h1 className='section_title'>Profile</h1>

      <div className='profile_content container'>
        {/* Section Left */}

        <h2 className='profile_content_name'>Eric Lee</h2>
        <img
          className='profile_content_selfie'
          src={ProfileImg}
          alt='Eric Lee'
        />
        <div className='profile_content_intro'>
          <p className='profile_content_intro_p'>
            <span role='img' aria-label='sheep'>
              👋
            </span>{' '}
            I'm Eric Lee, an experienced, enthusiastic full-stack developer from
            Australia. Specialising in software development, mobile application
            development, web design, full-stack development (coded this site
            with React + Material UI) and cloud computing.
          </p>
          <p className='profile_content_intro_p'>
            I have 3 Yrs+ experience efficiently coding websites and application
            using HTML, CSS3, JavaScript Es6+, NodeJS, TypeScript and React. I
            love building easy to use, useful, fascinating websites and
            applications.
          </p>
          <p className='profile_content_intro_p'>
            I am a person who aims to perform to the highest standard and take
            my work very seriously. Making an excellent application not only can
            keep my users happy but also makes me feel I can achieve something
            big in life. I believe that is the reason why I am in love with
            developing software.
          </p>
          <p className='profile_content_intro_p'>
            I love to learn and discover new technologies on YouTube and Medium.
            You also can catch my code on my
            <a href='https://github.com/Ericlkl'> GitHub </a>.
          </p>
          <p className='profile_content_intro_p'>
            However, when I’m not behind my macbook, you could find me either at
            the library watching books or swimming in Gold Coast.
          </p>
        </div>
        <div className='profile_content_achievement'>{AchievementBoxs}</div>

        {/* Section Right End*/}
      </div>
    </section>
  );
};

export default Profile;
