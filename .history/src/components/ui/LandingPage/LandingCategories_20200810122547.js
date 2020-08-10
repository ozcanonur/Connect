import React from 'react';

import { Grid } from '@material-ui/core';

const LandingCategories = () => {
  return (
    <Grid container direction='column'>
      <Grid item style={{ textAlign: 'center' }}>
        <div>Yurtdisina acilan kapiniz</div>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='space-between'>
          <Grid item>Yaz okullari</Grid>
          <Grid item>Dil okullari</Grid>
          <Grid item>50+ programlar</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='space-between'>
          <Grid item>Celta</Grid>
          <Grid item>Lise degisim</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item>
          <Grid container direction='row' justify='space-between'>
            <Grid item>Lisans</Grid>
            <Grid item>Lisansustu</Grid>
            <Grid item>Galeri</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingCategories;
