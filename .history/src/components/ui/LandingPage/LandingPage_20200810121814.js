import React from 'react';

import { Grid } from '@material-ui/core';

const LandingPage = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <div
          style={{ height: '400px', backgroundColor: 'red', color: 'white', textAlign: 'center' }}>
          Top picture
        </div>
      </Grid>
      <Grid item>
        <div
          style={{ height: '400px', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>
          Main categories
        </div>
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
