import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Container, Button } from '@material-ui/core';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Link = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Navbar = () => {
  return (
    <nav id='transfromNavbar' className='navbar'>
      <div className='navbar_container'>
        <Container>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <h5 className='navbar_band'>Eric lee</h5>
            </Grid>
            <Grid item>
              <Grid
                className='navbar_links'
                container
                justify='flex-end'
                alignItems='center'
              >
                <Grid item>
                  {/* Button 1 */}
                  <Button to='/' component={Link} simple type='button'>
                    <AccountCircleIcon /> About
                  </Button>
                </Grid>

                <Grid item>
                  {/* Button 1 */}
                  <Button to='/projects' component={Link} simple type='button'>
                    <ViewCompactIcon />
                    Projects
                  </Button>
                </Grid>

                <Grid item>
                  {/* Button 1 */}
                  <Button to='/contacts' component={Link} simple type='button'>
                    <MailOutlineIcon />
                    Contact
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    target='_blank'
                    href='https://github.com/Ericlkl/'
                    justIcon
                    round
                    color='transparent'
                  >
                    <i className={'navbar_icons fab fa-github'} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
