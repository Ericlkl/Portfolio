import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Grid, Container, Button } from '@material-ui/core';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// const Link = React.forwardRef((props, ref) => (
//   <RouterLink innerRef={ref} {...props} />
// ));

type NavState = {
  direction: 'vertical' | 'horizontal';
  expend: boolean;
};

const Navbar: React.FC = () => {
  const handleResize = () => {
    console.log(`Current Width : ${window.innerWidth}`);
    if (window.innerWidth > 650)
      setNavState({ direction: 'horizontal', expend: false });
    else setNavState({ direction: 'vertical', expend: false });
  };

  const [navState, setNavState] = useState<NavState>({
    direction: 'vertical',
    expend: false
  });

  const toggleMenu = () =>
    setNavState({ ...navState, expend: !navState.expend });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (navState.direction === 'horizontal') {
    return (
      <nav className='navbar horizontal'>
        <div className='navbar_main '>
          <h5 className='navbar_main_band'>Eric lee</h5>
        </div>

        <div className='navbar_links horizontal center'>
          <Link to='/' className='navbar_links_link'>
            <AccountCircleIcon />
            &nbsp;About
          </Link>
          <Link to='/' className='navbar_links_link'>
            <ViewCompactIcon />
            &nbsp;Projects
          </Link>
          <Link to='/' className='navbar_links_link'>
            <MailOutlineIcon />
            &nbsp;Contact
          </Link>
          <Link to='/' className='navbar_links_link'>
            <i className={'navbar_links_icons fab fa-github'} />
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='navbar vertical'>
        <div className='navbar_main horizontal space-between'>
          <h5 className='navbar_main_band'>Eric lee</h5>
          <div onClick={toggleMenu} className='navbar_main_expand_btn'>
            <i className='fas fa-bars' />
          </div>
        </div>

        <div
          style={navState.expend ? {} : { display: 'none' }}
          className='navbar_links'
        >
          <Link to='/' className='navbar_links_link'>
            <AccountCircleIcon />
            &nbsp;About
          </Link>
          <Link to='/' className='navbar_links_link'>
            <ViewCompactIcon />
            &nbsp;Projects
          </Link>
          <Link to='/' className='navbar_links_link'>
            <MailOutlineIcon />
            &nbsp;Contact
          </Link>
          <Link to='/' className='navbar_links_link'>
            <i className={'navbar_links_icons fab fa-github'} />
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navbar;
