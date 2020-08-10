import React from 'react';

import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Category from './Category';

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
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
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
        <Grid container direction='row' justify='space-evenly' spacing={2}>
          <Grid item md>
            <Category imgSrc={require('../../../assets/1_1.jpg')} btnText={'Yaz Okullari'} />
          </Grid>
          <Grid item md>
            <Grid container direction='column'>
              <Category imgSrc={require('../../../assets/1_2.jpg')} btnText={'Dil Okullari'} />
            </Grid>
          </Grid>
          <Grid item md>
            <Grid container direction='column'>
              <Category imgSrc={require('../../../assets/1_3.jpg')} btnText={'50+ Programlar'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingCategories;
