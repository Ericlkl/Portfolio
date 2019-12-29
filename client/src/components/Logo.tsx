import React from 'react';
import logoBlue from '../assets/img/logo/logo_blue.png';
import logoPurple from '../assets/img/logo/logo_purple.png';
import logoTeal from '../assets/img/logo/logo_teal.png';

type LogoProps = {
  color?: 'blue' | 'teal' | 'purple';
  className?: string;
};
const Logo: React.FC<LogoProps> = ({ color, className }) => {
  let logo;
  switch (color) {
    case 'teal':
      logo = logoTeal;
    case 'purple':
      logo = logoPurple;
    default:
    case 'blue':
      logo = logoBlue;
  }

  return <img className={className} src={logo} alt='Eric Logo' />;
};

export default Logo;
