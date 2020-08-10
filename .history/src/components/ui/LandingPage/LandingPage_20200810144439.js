import React from 'react';

import { Grid } from '@material-ui/core';

import LandingCategories from './LandingCategories';

const LandingPage = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <img
          style={{
            width: '100%',
            height: '50em',
            objectFit: 'cover',
            bottom: '-20%',
          }}
          alt='Landing'
          src={require('../../../assets/LandingTop.jpg')}
        />
      </Grid>
      <Grid item>
        <LandingCategories />
      </Grid>
      <Grid item>
        <div
          style={{
            height: '200px',
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
          }}>
          Yurtdisinda egitim alan ogrencilerimiz
        </div>
      </Grid>
      <Grid item>
        <div
          style={{
            height: '200px',
            backgroundColor: 'orange',
            color: 'white',
            textAlign: 'center',
          }}>
          Bir cok ulkede egitim
        </div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
