import React from 'react';

import { Grid } from '@material-ui/core';

const LandingPage = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <div>Top picture</div>
      </Grid>
      <Grid item>
        <div>Main categories</div>
      </Grid>
      <Grid item>
        <div>Yurtdisinda egitim alan ogrencilerimiz</div>
      </Grid>
      <Grid item>
        <div>Bir cok ulkede egitim</div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
