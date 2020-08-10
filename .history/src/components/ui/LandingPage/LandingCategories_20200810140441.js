import React from 'react';

import { Grid, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

// Create styles (className={classes.toolbarMargin} etc.)
// Automatically takes the Theme.js file as the parameter
const useStyles = makeStyles((theme) => {
  return {
    button: {
      border: '2px solid black',
      color: '#000000',
      backgroundColor: 'transparent',
      transition: '0.1s background-color linear, 0.1s color linear',
      padding: '2em 2empx',
      fontWeight: '400',
      letterSpacing: '0.2em',
    },
    placeholderDiv: {
      height: '300px',
      width: '300px',
      backgroundColor: 'red',
    },
  };
});

const LandingCategories = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='column' style={{ padding: '1em' }}>
      <Grid item style={{ textAlign: 'center' }}>
        <Grid container direction='column'>
          <Grid item>
            <div>Yurtdisina acilan kapiniz.</div>
          </Grid>
          <Grid item>
            <Button variant='contained' className={classes.button}>
              Vizyonumuz
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='space-evenly'>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <div className={classes.placeholderDiv}></div>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button className={classes.button}>Yaz okullari</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <div style={{ height: '300px', width: '300px', backgroundColor: 'red' }}></div>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button className={classes.button}>Vizyonumuz</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='column'>
              <Grid item>
                <div style={{ height: '300px', width: '300px', backgroundColor: 'red' }}></div>
              </Grid>
              <Grid item style={{ textAlign: 'center' }}>
                <Button style={{ border: '1px solid black' }}>Vizyonumuz</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingCategories;
