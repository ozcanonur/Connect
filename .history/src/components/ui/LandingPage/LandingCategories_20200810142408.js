import React from 'react';

import { Grid, Button, Typography, Divider } from '@material-ui/core';
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
      padding: '1em 1em',
      fontWeight: '1000',
      letterSpacing: '0.2em',
      fontFamily: 'Raleway',
    },
    placeholderDiv: {
      height: '300px',
      width: '300px',
      backgroundColor: 'red',
    },
    hr: {},
  };
});

const LandingCategories = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item md style={{ textAlign: 'center' }}>
        <Grid container direction='column' style={{ padding: '3em' }}>
          <Grid item>
            <Typography variant='h2'>Yurtdisina acilan kapiniz.</Typography>
          </Grid>
          <Grid item style={{ marginTop: '1em' }}>
            <Button variant='contained' className={classes.button}>
              Vizyonumuz
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md>
        <Grid container direction='row' justify='space-evenly'>
          <Grid item>
            <Grid container direction='column'>
              <Grid item md>
                <img
                  style={{
                    width: '100%',
                    height: '5em',
                    objectFit: 'cover',
                  }}
                  alt='Landing'
                  src={require('../../../assets/1_1.jpg')}
                />
              </Grid>
              <Grid item md style={{ textAlign: 'center' }}>
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