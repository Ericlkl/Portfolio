import React from 'react';
import ProfileImg from '../../assets/img/hero2.jpg';

const MyHistory: React.FC = () => {
  return (
    <section className='myHistory container'>
      <h1 className='section_title'>Intro</h1>

      <div className='myHistory_content'>
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
          <ul className='myHistory_content_achievement_awards'>
            <li>Griffith University - Awards</li>
            <li>Griffith University - Awards</li>
            <li>Griffith University - Awards</li>
            <li>Griffith University - Awards</li>
          </ul>
          <ul className='myHistory_content_achievement_exp'>
            <li>AAS Education - IT Tutors</li>
            <li>QUT - Mobile Application Developer Internship</li>
            <li>CSIRO - Medicial Search Engine Developer</li>
          </ul>
        </div>
        {/* Section Right End*/}
      </div>
    </section>
  );
};

export default MyHistory;
