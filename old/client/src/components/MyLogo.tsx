import React from 'react';
import logoBlue from '../assets/img/logo/logo_blue.png';
import logoGrey from '../assets/img/logo/logo_grey.png';
import logoTeal from '../assets/img/logo/logo_teal.png';

type MyLogoProps = {
  color: 'blue' | 'teal' | 'grey';
  className?: string;
};
const MyLogo: React.FC<MyLogoProps> = ({ color, className }) => {
  let logo: string;
  switch (color) {
    case 'teal':
      logo = logoTeal;
      break;
    case 'grey':
      logo = logoGrey;
      break;
    case 'blue':
      logo = logoBlue;
  }

  return <img className={className} src={logo} alt='Eric Logo' />;
};

export default MyLogo;
