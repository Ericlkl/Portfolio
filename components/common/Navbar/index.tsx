// Library
import { useState } from 'react';

// Components
import MyBrand from '../MyBrand';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import HamburgerButton from './HamburgerButton';

// Styles
import styles from 'styles/common/navbar.module.scss';

// Interfaces
import { NavbarProps } from 'interfaces/components/common/navbar.interface';

// data
import { navbarInfo } from 'constants/components/navbar';

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
            <MyBrand color={logoColor} className={styles.nav_logo} />
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
