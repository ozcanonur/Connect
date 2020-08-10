import React from 'react';

import { Grid } from '@material-ui/core';

import LandingCategories from './LandingCategories';

const LandingPage = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <img alt='Landing image' src={require('../../../assets/LandingTop.jpg')} />
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

{
  /* style={{ height: '400px', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}> */
}