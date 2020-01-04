import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';

import profile_img from '../../assets/img/profile_small.jpg';

const Header: React.FC = () => {
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (jobIndex === 2) setJobIndex(0);
      else setJobIndex(jobIndex + 1);
    }, 4000);

    //eslint-disable-next-line
  }, [jobIndex]);

  const jobTitle = [
    'A Software Engineer',
    'A Full Stack Web Developer',
    'A Mobile App Developer'
  ];

  return (
    <header className='header'>
      <div className='header_content container'>
        <div className='header_content_profile'>
          <img src={profile_img} alt='eric_profile' />
        </div>

        <div className='header_content_info'>
          <h2 className='header_content_info_greeting'>
            Hi, I'm Eric. <br />
            <Typed strings={jobTitle} typeSpeed={65} backSpeed={65} loop />
          </h2>
          <h3 className='header_content_info_desc'>
            I create applications that solve customer's problem.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
