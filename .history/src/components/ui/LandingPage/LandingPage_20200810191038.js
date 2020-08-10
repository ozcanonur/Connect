import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import LandingCategories from './LandingCategories';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      ...theme.button,
    },
  };
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <ParallaxProvider>
      <Grid container direction='column'>
        <Grid item md>
          <Parallax y={[-40, 0]}>
            <img
              src={require('../../../assets/LandingTop.jpg')}
              style={{ width: '100%', height: '50em', objectFit: 'cover', position: 'absolute' }}
            />
          </Parallax>
        </Grid>
        <Grid item md>
          <LandingCategories />
        </Grid>
        <Grid item>
          <Parallax y={[-20, 20]}>
            <img
              style={{
                width: '100%',
                height: '50em',
                objectFit: 'cover',
                paddingTop: '3em',
              }}
              alt='Landing'
              src={require('../../../assets/LandingBottomOne.jpg')}
            />
          </Parallax>
        </Grid>
        <Grid item md>
          <Grid container direction='row'>
            <Grid item md>
              <Grid container direction='column' style={{ padding: '3em' }}>
                <Grid item>
                  <Typography variant='h2'>Bir cok ulkede egitim</Typography>
                </Grid>
                <Grid item style={{ marginTop: '1em' }}>
                  <Button variant='contained' className={classes.button}>
                    Calistigimiz Ulkeler
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md>
              <img
                style={{
                  width: '100%',
                  height: '30em',
                  objectFit: 'cover',
                }}
                alt='Landing'
                src={require('../../../assets/LandingBottomTwo.jpg')}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ParallaxProvider>
  );
};

export default LandingPage;
