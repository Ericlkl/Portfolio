import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Grid, Container, Button } from '@material-ui/core';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// const Link = React.forwardRef((props, ref) => (
//   <RouterLink innerRef={ref} {...props} />
// ));

const Navbar: React.FC = () => {
  const handleResize = () => {
    console.log(`Current Width : ${window.innerWidth}`);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav id='transfromNavbar' className='navbar'>
      <h5 className='navbar_band'>Eric lee</h5>

      <div className='navbar_links'>
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
};

export default Navbar;
