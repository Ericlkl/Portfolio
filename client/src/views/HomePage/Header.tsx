import React, { useState, useEffect } from 'react';
import Particle from './Particle';
import TextLoop from 'react-text-loop';

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

  return (
    <header className='header'>
      <Particle />
      <div className='header_content container'>
        <div className='header_content_profile'>
          <img src={profile_img} alt='eric_profile' />
        </div>

        <div className='header_content_info'>
          <div className='header_content_info_highlight'>
            <h2 className='header_content_info_highlight_name'>Eric lee,</h2>

            <TextLoop>
              <h2 className='header_content_info_highlight_title'>
                Software Engineer
              </h2>
              <h2 className='header_content_info_highlight_title'>
                Full Stack Developer
              </h2>
              <h2 className='header_content_info_highlight_title'>
                Mobile App Developer
              </h2>
            </TextLoop>
          </div>
          <h3 className='header_content_info_desc'>
            I create applications that solve customer's problem.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
