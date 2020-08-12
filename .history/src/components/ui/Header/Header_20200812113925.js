import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../../assets/logo.png';
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
      marginBottom: '5em',
      [theme.breakpoints.down('md')]: {
        marginBottom: '5em',
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
      backgroundColor: '#000000',
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
  // Creates stylesheet class
  const classes = useStyles();
  // Use theme
  const theme = useTheme();

  // If a tab is clicked, sets new state with the index of the clicked tab
  const handleTabChange = (event, newValue) => {
    props.setValue(newValue);
  };

  // Stores wherever we clicked on, for mouseover menu for services tab
  // Mouseover menu checks if there is anchor and open==true and renders if so
  const [anchorEl, setAnchorEl] = useState(null);
  // Menu is open or not
  const [openMenu, setOpenMenu] = useState(false);
  // Tab title clicked => set the anchor to the clicked title and open menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  // Closing version of above
  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  // Track index of selected menu item
  const [selectedIndex, setSelectedIndex] = useState(0);
  //
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: 'Programlar', link: '/programlar', activeIndex: 1, selectedIndex: 0 },
    { name: 'Yaz Okullari', link: '/yazOkullari', activeIndex: 1, selectedIndex: 1 },
    {
      name: 'Dil Okullari',
      link: '/dilOkullari',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: '50+ Programlar',
      link: '/50plusProgramlar',
      activeIndex: 1,
      selectedIndex: 3,
    },
    { name: 'CELTA', link: '/celta', activeIndex: 1, selectedIndex: 4 },
    { name: 'Lise Degisim', link: '/liseDegisim', activeIndex: 1, selectedIndex: 5 },
    { name: 'Lisans', link: '/lisans', activeIndex: 1, selectedIndex: 6 },
    { name: 'Lisansustu', link: '/lisansustu', activeIndex: 1, selectedIndex: 7 },
  ];

  const routes = [
    {
      name: 'Programlar',
      link: '/programlar',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'Ulkeler', link: '/ulkeler', activeIndex: 2 },
    { name: 'Galeri', link: '/galeri', activeIndex: 3 },
    { name: 'Referanslar', link: '/referanslar', activeIndex: 4 },
    { name: 'Hakkimizda', link: '/hakkimizda', activeIndex: 5 },
    { name: 'Iletisim', link: '/iletisim', activeIndex: 6 },
  ];

  // Page refresh fix
  // Normally before fix, it changes the URL but the selected index doesnt change
  // Check the URL, and if the state is not equal, route to that URL
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          props.setValue();
          break;
        default:
          break;
      }
    });
    // This option is for using useEffect when any of these options change
  }, [props.value, menuOptions, selectedIndex, routes, props]);

  // returns true if the screen is 'md' or below
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // Drawer open or not state
  const [openDrawer, setOpenDrawer] = useState(false);

  const tabs = (
    <React.Fragment>
      {/* value is the state for active tab */}
      {/* on tab change, handleChange sets the value state, states are 1,2,3 etc. */}
      <Tabs
        value={props.value}
        onChange={handleTabChange}
        className={classes.tabContainer}
        indicatorColor='primary'>
        {/* Maps over all the different tab options and returns the list of them */}
        {/* component option attaches another components abilities to this one */}
        {/* aria-owns checks if we have anchor element(anchorEl) */}
        {/* aria-popup (boolean) checks if we have anchor element(anchorEl) */}
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      {/* MenuListProps is from material-ui, lower level options for builder components behind Menu */}
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
        style={{ zIndex: '5000' }}>
        {/* Create a new menuItem for each option (services, customsoftware etc.) */}
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && props.value === 1}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  return (
    //JSX elements and HTML need a container to be next to each other, fragment solves that
    <React.Fragment>
      {/* AppBar + Toolbar container for header bar.
          Position: static makes it stick up top */}
      <AppBar className={classes.appbar}>
        <Toolbar disableGutters style={{ padding: '1.5em' }}>
          {/* Button is for the logo click */}
          {/* Solved padding with automarginleft and height with logoContainer*/}
          {/* value state is where the active tab */}
          {/* if the screen size is 'md' or lower, show drawer */}
          <Button
            className={classes.logoContainer}
            component={Link}
            to='/'
            onClick={() => props.setValue(0)}
            disableRipple>
            <img alt='company logo' className={classes.logo} src={logo} />
          </Button>
          {tabs}
        </Toolbar>
      </AppBar>
      {/* Have to put toolbarmargin to make the div below go down for some reason */}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
