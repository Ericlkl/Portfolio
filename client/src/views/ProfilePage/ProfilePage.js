/*eslint-disable*/
import React, { Fragment } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons

import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import Navbar from './Navbar';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import Hero from './Hero';
import Services from './Services';

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.js';

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Services />

      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/?ref=mkpr-profile'
                    target='_blank'
                    className={classes.block}
                  >
                    Eric Lee
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=mkpr-profile'
                    target='_blank'
                    className={classes.block}
                  >
                    About
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href='//blog.creative-tim.com/' className={classes.block}>
                    Projects
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , Designed and Developed by{' '}
              <a
                href='https://www.creative-tim.com?ref=mkpr-profile'
                target='_blank'
              >
                Eric Lee
              </a>
            </div>
          </div>
        }
      />
    </Fragment>
  );
}
