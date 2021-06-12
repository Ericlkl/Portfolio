import React, { useEffect, useState } from 'react';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import MyLogo from '../MyLogo';

import styles from '@/styles/Layout/navbar.module.scss';

type NavState = {
  direction: 'vertical' | 'horizontal';
  showName: boolean;
  expend: boolean;
};

type NavbarProps = {
  logoColor: 'blue' | 'grey' | 'teal';
};

const Navbar: React.FC<NavbarProps> = ({ logoColor }) => {
  // const [navState, setNavState] = useState<NavState>({
  //   direction: window.innerWidth > 650 ? 'horizontal' : 'vertical',
  //   showName: false,
  //   expend: window.innerWidth > 650 ? true : false
  // });

  // const handleResize = () => {
  //   if (window.innerWidth > 650)
  //     setNavState({ direction: 'horizontal', showName: false, expend: true });
  //   else setNavState({ direction: 'vertical', showName: false, expend: false });
  // };

  // Expend the menu
  // const toggleMenu = () =>
  //   setNavState({ ...navState, expend: !navState.expend });

  // // Reveal Name
  // const revealName = () => setNavState({ ...navState, showName: true });
  // // hide Name
  // const hideName = () => setNavState({ ...navState, showName: false });

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.nav_content} container`}>
        <div className={styles.band}>
          <MyLogo color={logoColor} className={styles.nav_logo} />
          <h1 className={styles.band_name}>ERIC LEE</h1>
        </div>
        <div className={`${styles.hamburger_btn} ${styles.active}`}>
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
      </div>

      <div className={`${styles.nav_links} ${styles.active}`}>
        <a
          href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
          className={styles.nav_link}
        >
          <AccountCircleIcon />
          About
        </a>
        <a
          href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
          className={styles.nav_link}
        >
          <ViewCompactIcon />
          Projects
        </a>
        <a
          href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
          className={styles.nav_link}
        >
          <AssignmentIndIcon />
          Resume
        </a>
        <a href="https://github.com/Ericlkl" className={styles.nav_link}>
          <i className={`${styles.nav_link_icon} fab fa-github`} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
