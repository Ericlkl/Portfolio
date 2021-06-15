import React from 'react';
import Image from 'next/image';

type MyBandProps = {
  color: 'blue' | 'teal' | 'grey';
  className?: string;
};
const MyBand: React.FC<MyBandProps> = ({ color, className }) => {
  let logo: string;
  switch (color) {
    case 'teal':
      logo = '/img/logo/logo_teal.png';
      break;
    case 'grey':
      logo = '/img/logo/logo_grey.png';
      break;
    case 'blue':
      logo = '/img/logo/logo_blue.png';
  }

  return (
    <Image
      width={50}
      height={50}
      className={className}
      src={logo}
      alt="Eric Logo"
    />
  );
};

export default MyBand;