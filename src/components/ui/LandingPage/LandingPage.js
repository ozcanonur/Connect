import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core';
import { Parallax } from 'react-parallax';

import CategoryCard from './CategoryCard';
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
      backgroundColor: 'white',
      color: 'black',
      height: '5em',
      width: '20em',
      opacity: '0.8',
    },
    h2: {
      ...theme.h2,
      fontSize: '4rem',
      color: 'white',
      opacity: '1',
    },
    visionButton: {
      ...theme.button,
      backgroundColor: 'black',
      color: 'white',
      height: '5em',
      opacity: '0.8',
      width: '20em',
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
      <Grid item md style={{ textAlign: 'center' }}>
        <Grid container direction='column' style={{ padding: '3em' }}>
          <Grid item md>
            <Typography variant='h2'>Yurtdisina acilan kapiniz.</Typography>
          </Grid>
          <Grid item md style={{ marginTop: '1em' }}>
            <Button variant='contained' className={classes.visionButton}>
              Vizyonumuz
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md style={{ padding: '0em 10em 0em 10em' }}>
        <Grid container direction='row' justify='center' style={{ paddingBottom: '3em' }}>
          <Grid item md style={{ padding: '3em' }}>
            <CategoryCard />
          </Grid>
          <Grid item md style={{ padding: '3em' }}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md style={{ position: 'relative' }}>
        <Parallax bgImage={require('../../../assets/Toronto.jpg')} strength={400}>
          <div style={{ height: '50em' }}>
            <Grid
              container
              direction='column'
              style={{
                position: 'absolute',
                background: 'rgba(0,0,0,0.3)',
                marginTop: '5%',
                left: 0,
                padding: '2em',
                width: 'inherit',
              }}
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
      <Grid item md>
        <Grid container direction='row' justify='center'>
          <Grid item md style={{ padding: '3em' }}>
            <CategoryCard />
          </Grid>
          <Grid item md style={{ padding: '3em' }}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md style={{ position: 'relative' }}>
        <Parallax bgImage={require('../../../assets/LandingBottomOne.jpg')} strength={400}>
          <div style={{ height: '50em' }}>
            <Grid
              container
              direction='column'
              style={{
                position: 'absolute',
                background: 'rgba(0,0,0,0.3)',
                padding: '2em',
                marginTop: '5%',
                left: 0,
                width: 'inherit',
              }}
              alignItems='flex-end'>
              <Grid item>
                <Typography variant='h2' className={classes.h2} style={{ textAlign: 'right' }}>
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
      <Grid item md>
        <Grid container direction='row' justify='center'>
          <Grid item md style={{ padding: '3em' }}>
            <CategoryCard />
          </Grid>
          <Grid item md style={{ padding: '3em' }}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md style={{ position: 'relative' }}>
        <Parallax bgImage={require('../../../assets/LandingCathedral.jpg')} strength={400}>
          <div style={{ height: '50em' }}>
            <Grid
              container
              direction='column'
              style={{
                position: 'absolute',
                background: 'rgba(0,0,0,0.3)',
                marginTop: '5%',
                left: 0,
                padding: '2em',
                width: 'inherit',
              }}
              alignItems='flex-end'>
              <Grid item>
                <Typography variant='h2' className={classes.h2} style={{ color: 'white' }}>
                  Ilk adiminizi bizimle atin.
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: '1em' }}>
                <Button
                  variant='contained'
                  className={classes.altButton}
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                  }}>
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
