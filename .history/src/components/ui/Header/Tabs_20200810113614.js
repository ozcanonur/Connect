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

const Tabs = () => (
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
    {/* Free estimate button on top right */}
    {/* variant is from material-ui => style of button */}
    <Button
      variant='contained'
      component={Link}
      to='/estimate'
      color='secondary'
      className={classes.button}
      onClick={() => props.setValue()}>
      Free Estimate
    </Button>
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
);

export default Tabs;
