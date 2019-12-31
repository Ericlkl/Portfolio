import React from 'react';

const Header = () => {
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
        <p className='project_desc_card_header_right_links'>
          <i className='fab fa-fw fa-github-square' /> <p>Http: //</p>
        </p>
        <p className='project_desc_card_header_right_links'>
          <i className='fab fa-fw fa-docker' /> <p>Http: //</p>
        </p>
        <p className='project_desc_card_header_right_links'>
          <i className='fas fa-fw fa-desktop' /> <p>Http://</p>
        </p>
      </div>
    </div>
  );
};

export default Header;
