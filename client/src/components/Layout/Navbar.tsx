import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';

// const Link = React.forwardRef((props, ref) => (
//   <RouterLink innerRef={ref} {...props} />
// ));

type NavState = {
  direction: 'vertical' | 'horizontal';
  expend: boolean;
};

const Navbar: React.FC = () => {
  const handleResize = () => {
    if (window.innerWidth > 650)
      setNavState({ direction: 'horizontal', expend: true });
    else setNavState({ direction: 'vertical', expend: false });
  };

  const [navState, setNavState] = useState<NavState>({
    direction: window.innerWidth > 650 ? 'horizontal' : 'vertical',
    expend: window.innerWidth > 650 ? true : false
  });

  const toggleMenu = () =>
    setNavState({ ...navState, expend: !navState.expend });

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
        <Link to='/' className='navbar_main_band'>
          Eric lee
        </Link>
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
        <Link to='/' className='navbar_links_link'>
          <i className={'navbar_links_icons fab fa-github'} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
