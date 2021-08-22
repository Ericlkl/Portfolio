// components
import AchievementBox from './AchievementBox';
// config data
import { achievements } from 'constants/pages';
// styles
import styles from 'styles/pages/about/profile.module.scss';

const Profile: React.FC = () => {
  const AchievementBoxes = achievements.map((achieve) => (
    <AchievementBox
      key={achieve.title}
      title={achieve.title}
      items={achieve.items}
    />
  ));

  return (
    <section className={styles.profile}>
      <h1 className="section_title">Profile</h1>

      <div className={`${styles.profile_content} container`}>
        {/* Section Left */}

        <h2 className={styles.profile_content_name}>Eric Lee</h2>
        <img
          className={styles.profile_content_selfie}
          src="/img/hero2.jpg"
          alt="Eric Lee"
        />
        <div className={styles.profile_content_intro}>
          <p className={styles.profile_content_intro_p}>
            <span role="img" aria-label="sheep">
              👋
            </span>{' '}
            I'm Eric Lee, an experienced, enthusiastic full-stack developer from
            Hong Kong. Specializing in software development, full-stack web application development 
            (coded this site with React + Material UI) and cloud computing.
          </p>
          <p className={styles.profile_content_intro_p}>
            I have 3 Yrs+ experience efficiently coding websites and application
            using HTML, CSS3, JavaScript ES6+, NodeJS, TypeScript and React. I
            love building easy to use, useful, fascinating websites and
            applications.
          </p>
          <p className={styles.profile_content_intro_p}>
            I am a person who aims to perform to the highest standard and take
            my work very seriously. Making an excellent application not only can
            keep my users happy but also makes me feel I can achieve something
            big in life. I believe that is the reason why I am in love with
            developing software.
          </p>
          <p className={styles.profile_content_intro_p}>
            I love to learn and discover new technologies on YouTube and Medium.
            You also can catch my code on my
            <a href="https://github.com/Ericlkl"> GitHub </a>.
          </p>
          <p className={styles.profile_content_intro_p}>
            However, when I’m not behind my MacBook, you could find me either at
            the library watching books or swimming in Gold Coast.
          </p>
        </div>
        <div className={styles.profile_content_achievement}>
          {AchievementBoxes}
        </div>

        {/* Section Right End*/}
      </div>
    </section>
  );
};

export default Profile;
