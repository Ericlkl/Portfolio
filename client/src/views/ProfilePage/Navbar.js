import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Button from 'components/CustomButtons/Button.js';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
                  <Button simple type='button'>
                    <AccountCircleIcon /> About
                  </Button>
                </Grid>

                <Grid item>
                  {/* Button 1 */}
                  <Button simple type='button'>
                    <ViewCompactIcon />
                    Projects
                  </Button>
                </Grid>

                <Grid item>
                  {/* Button 1 */}
                  <Button simple type='button'>
                    <MailOutlineIcon />
                    Contact
                  </Button>
                </Grid>

                <Grid item>
                  <Button justIcon round color='transparent'>
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
