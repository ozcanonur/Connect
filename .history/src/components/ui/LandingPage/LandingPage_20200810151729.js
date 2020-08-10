import React from 'react';

import { Grid } from '@material-ui/core';

import LandingCategories from './LandingCategories';

const LandingPage = () => {
  return (
    <Grid container direction='column'>
      <Grid item md>
        <img
          style={{
            width: '100%',
            height: '50em',
            objectFit: 'cover',
          }}
          alt='Landing'
          src={require('../../../assets/LandingTop.jpg')}
        />
      </Grid>
      <Grid item md>
        <LandingCategories />
      </Grid>
      <Grid item>
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
      </Grid>
      <Grid item md>
        <Grid container direction='row'>
          <Grid item md>
            Bir cok ulkede egitim
          </Grid>
          <Grid item md>
            <img
              style={{
                width: '100%',
                height: '50em',
                objectFit: 'cover',
              }}
              alt='Landing'
              src={require('../../../assets/LandingBottomTwo.jpg')}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
