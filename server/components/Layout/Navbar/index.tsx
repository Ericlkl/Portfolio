import { useState } from 'react';

// Components
import MyBand from '../../common/MyBand';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import HamburgerButton from './HamburgerButton';

import styles from '@/styles/Layout/navbar.module.scss';

// Props
import { NavbarProps } from '../interfaces';

// data
import config from '@/config';
const { navbarInfo } = config;

const Navbar: React.FC<NavbarProps> = ({ logoColor }) => {
  const [active, setActive] = useState(false);

  // Todo: SSR Support
  const { band, navLinks } = navbarInfo;
  // Expend the menu
  const toggleMenu = () => setActive(!active);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.nav_content} container`}>
        <NavLink href="/">
          <div className={styles.band}>
            <MyBand color={logoColor} className={styles.nav_logo} />
            <h1 className={styles.band_name}>{band.name}</h1>
          </div>
        </NavLink>

        <HamburgerButton active={active} onClick={toggleMenu} />
      </div>
      <NavLinks active={active} navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;
