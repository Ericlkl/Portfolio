import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';

import Logo from '../Logo';

type NavState = {
  direction: 'vertical' | 'horizontal';
  showName: boolean;
  expend: boolean;
};

type NavbarProps = {
  logoColor: 'blue' | 'grey' | 'teal';
};

const Navbar: React.FC<NavbarProps> = ({ logoColor }) => {
  const [navState, setNavState] = useState<NavState>({
    direction: window.innerWidth > 650 ? 'horizontal' : 'vertical',
    showName: false,
    expend: window.innerWidth > 650 ? true : false
  });

  const handleResize = () => {
    if (window.innerWidth > 650)
      setNavState({ direction: 'horizontal', showName: false, expend: true });
    else setNavState({ direction: 'vertical', showName: false, expend: false });
  };

  // Expend the menu
  const toggleMenu = () =>
    setNavState({ ...navState, expend: !navState.expend });

  // Reveal Name
  const revealName = () => setNavState({ ...navState, showName: true });
  // hide Name
  const hideName = () => setNavState({ ...navState, showName: false });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        navState.direction === 'vertical'
          ? 'vertical'
          : 'horizontal space-around'
      }`}
    >
      <div className='navbar_main horizontal space-between'>
        <div className='navbar_main_band'>
          <Link onMouseOut={hideName} onMouseOver={revealName} to='/'>
            <Logo color={logoColor} className='navbar_main_band_logo' />
          </Link>
          <Fade left when={navState.showName}>
            <h1 className='navbar_main_band_name'>ERIC LEE</h1>
          </Fade>
        </div>
        <div
          style={navState.direction === 'vertical' ? {} : { display: 'none' }}
          onClick={toggleMenu}
          className='navbar_main_expand_btn'
        >
          <i className='fas fa-bars' />
        </div>
      </div>

      <div
        style={navState.expend ? {} : { display: 'none' }}
        className={`navbar_links ${
          navState.direction === 'vertical' ? 'vertical' : 'horizontal'
        }`}
      >
        <Link to='/about' className='navbar_links_link'>
          <AccountCircleIcon />
          &nbsp;About
        </Link>
        <Link to='/projects' className='navbar_links_link'>
          <ViewCompactIcon />
          &nbsp;Projects
        </Link>
        <a href='https://github.com/Ericlkl' className='navbar_links_link'>
          <i className={'navbar_links_icons fab fa-github'} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
