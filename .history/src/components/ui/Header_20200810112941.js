import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

// Create styles (className={classes.toolbarMargin} etc.)
// Automatically takes the Theme.js file as the parameter
const useStyles = makeStyles((theme) => {
  return {
    // Class names (toolbarMargin etc.) are custom
    // Just anything you will refer to later
    toolbarMargin: {
      // Spread operator gets theme.mixins.toolbar things from Theme.js
      ...theme.mixins.toolbar,
      marginBottom: '3em',
      [theme.breakpoints.down('md')]: {
        marginBottom: '2em',
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '1.25em',
      },
    },
    logo: {
      height: '7em',
      [theme.breakpoints.down('md')]: {
        height: '7em',
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em',
      },
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px',
      '&:hover': {
        opacity: 1,
      },
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: 'white',
      borderRadius: 0,
      '& .MuiListItemText-root': {
        zIndex: 50000,
      },
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
      color: 'white',
    },
    drawerIcon: {
      height: '50px',
      width: '50px',
    },
    drawerIconContainer: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
      marginLeft: 'auto',
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7,
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange,
    },
    drawerItemSelected: {
      '& .MuiListItemText-root': {
        opacity: 1,
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
  };
});

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar className={classes.appbar}>
        <Toolbar disableGutters>
          <Button className={classes.logoContainer} component={Link} to='/' disableRipple>
            <img alt='company logo' className={classes.logo} src={logo} />
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
