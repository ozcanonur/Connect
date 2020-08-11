import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core';
import { Parallax } from 'react-parallax';

import LandingCategories from './LandingCategories';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      ...theme.button,
    },
    altButton: {
      ...theme.button,
      backgroundColor: 'black',
      color: 'white',
      height: '6em',
      width: '30em',
    },
    h2: {
      ...theme.h2,
      fontSize: '4rem',
      color: 'white',
      opacity: '1',
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
          <div style={{ height: '50em' }}>
            <Grid
              container
              direction='column'
              style={{ position: 'absolute', padding: '15em 3em 3em 15em' }}>
              <Grid item>
                <Typography variant='h2' className={classes.h2}>
                  Bugunun ogrencileri.
                  <br />
                  Yarinin liderleri.
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <Button variant='contained' className={classes.altButton}>
                  Referanslarimiz
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Parallax>
      </Grid>
      <Grid item md style={{ position: 'relative' }}>
        <Parallax bgImage={require('../../../assets/Toronto.jpg')} strength={400}>
          <div style={{ height: '50em' }}>
            <Grid
              container
              direction='column'
              style={{ position: 'absolute', padding: '15em 15em 3em 3em' }}
              alignItems='flex-end'>
              <Grid item>
                <Typography variant='h2' className={classes.h2}>
                  Bir cok ulkede egitim.
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <Button variant='contained' className={classes.altButton}>
                  Calistigimiz Ulkeler
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Parallax>
      </Grid>
      <Grid item md style={{ position: 'relative' }}>
        <Parallax bgImage={require('../../../assets/LandingCathedral.jpg')} strength={400}>
          <div style={{ height: '50em' }}>
            <Grid
              container
              direction='column'
              style={{ position: 'absolute', padding: '3em', paddingLeft: '15em' }}>
              <Grid item>
                <Typography variant='h2' className={classes.h2} style={{ color: 'black' }}>
                  Ilk adiminizi bizimle atin.
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <Button variant='contained' className={classes.altButton}>
                  Iletisim
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Parallax>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

{
  /* <Grid item md>
        <Grid container direction='row' alignItems='stretch'>
          <Grid item md>
            <Grid container direction='column' style={{ padding: '3em' }}>
              <Grid item>
                <Typography variant='h2'>Bir cok ulkede egitim</Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <Button variant='contained' className={classes.button}>
                  Calistigimiz Ulkeler
                  <ArrowRightAltIcon />
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
      </Grid> */
}
