import React, { useEffect, useState } from 'react';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import MyLogo from '../MyLogo';

import styles from '../../styles/Layout/navbar.module.scss';

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
    <nav
      className={`${styles.navbar} ${styles.horizontal} ${styles['space-around']}`}
    >
      <div className={`${styles.navbar_main} container`}>
        <div className={styles.navbar_main_band}>
          {/* <Link onMouseOut={hideName} onMouseOver={revealName} to='/'> */}
          <MyLogo color={logoColor} className={styles.navbar_main_band_logo} />
          {/* </Link> */}

          <h1 className={styles.navbar_main_band_name}>ERIC LEE</h1>
        </div>
        <div className={styles.navbar_main_hmbg_btn}>
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
      </div>

      <div className={`${styles.navbar_links} ${styles.horizontal}`}>
        <AccountCircleIcon />
        &nbsp;About
        <ViewCompactIcon />
        &nbsp;Projects
        <a
          href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
          className={styles.navbar_links_link}
        >
          <AssignmentIndIcon />
          &nbsp;Resume
        </a>
        <a
          href="https://github.com/Ericlkl"
          className={styles.navbar_links_link}
        >
          <i className={`${styles.navbar_links_icons} fab fa-github`} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
