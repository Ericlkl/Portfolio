import React, { useState } from 'react';

// Components
import MyLogo from '@/components/MyLogo';
import NavLinks from './NavLinks';
import HamburgerButton from './HamburgerButton';

import styles from '@/styles/Layout/navbar.module.scss';

// Props
import { NavbarProps } from '@/components/Layout/interfaces';

const Navbar: React.FC<NavbarProps> = ({ logoColor }) => {
  // const [active, setActive] = useState<NavState>({
  //   direction: window.innerWidth > 650 ? 'horizontal' : 'vertical',
  //   showName: false,
  //   expend: window.innerWidth > 650 ? true : false,
  // });

  // Expend the menu
  // const toggleMenu = () =>
  //   setNavState({ ...navState, expend: !navState.expend });

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.nav_content} container`}>
        <div className={styles.band}>
          {/* <MyLogo color={logoColor} className={styles.nav_logo} /> */}
          <h1 className={styles.band_name}>ERIC LEE</h1>
        </div>
        <HamburgerButton active={true} />
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
