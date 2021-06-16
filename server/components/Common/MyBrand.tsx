import React from 'react';
import Image from 'next/image';

import { MyBrandProps, BrandColor } from 'interfaces/components/common/myBrand.interface'

const MyBrand: React.FC<MyBrandProps> = ({ color, className }) => {
  const getLogoUrl = (color: BrandColor) => {
    const handler = {
      grey: '/img/logo/logo_grey.png',
      blue: '/img/logo/logo_blue.png',
      teal: '/img/logo/logo_teal.png'
    }
    return handler[color];
  }

  const logo = getLogoUrl(color);

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

export default MyBrand;
