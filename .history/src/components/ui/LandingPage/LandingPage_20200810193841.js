import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core';
import { Parallax } from 'react-parallax';

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
    <Grid container direction='column'>
      <Grid item md>
        <Parallax bgImage={require('../../../assets/LandingTop.jpg')} strength={400}>
          <div style={{ height: '40em' }} />
        </Parallax>
      </Grid>
      <Grid item md>
        <LandingCategories />
      </Grid>
      <Grid item md style={{ position: 'relative' }}>
        <Parallax bgImage={require('../../../assets/LandingBottomOne.jpg')} strength={400}>
          <div style={{ height: '30em' }}>
            <Grid
              container
              direction='column'
              style={{ padding: '3em' }}
              style={{ position: 'absolute' }}>
              <Grid item>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Bir cok ulkede egitim
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <Button variant='contained' className={classes.button}>
                  Calistigimiz Ulkeler
                </Button>
              </Grid>
            </Grid>
          </div>
        </Parallax>
      </Grid>
      <Grid item md>
        <Grid container direction='row' alignItems='stretch'>
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
                height: '100%',
                objectFit: 'cover',
              }}
              alt='Landing'
              src={require('../../../assets/Toronto.jpg')}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
