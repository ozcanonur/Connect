import React from 'react';

import { Grid, Button } from '@material-ui/core';

const LandingCategories = () => {
  return (
    <Grid container direction='column' style={{ padding: '1em' }}>
      <Grid item style={{ textAlign: 'center' }}>
        <Grid container direction='column'>
          <Grid item>
            <div>Yurtdisina acilan kapiniz.</div>
          </Grid>
          <Grid item>
            <Button style={{ border: '1px solid black' }}>Vizyonumuz</Button>
          </Grid>
        </Grid>
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
