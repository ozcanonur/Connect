import React from 'react';
import { Grid } from '@material-ui/core';

const Referans = () => {
  return (
    <Grid container direction='row'>
      <Grid item xs={3}>
        PIC
      </Grid>
      <Grid item xs={9}>
        TEXT
      </Grid>
    </Grid>
  );
};

const Referanslar = () => {
  return (
    <div style={{ padding: '10em', paddingTop: '5em' }}>
      <Typography variant='h1' style={{ textAlign: 'center', paddingBottom: '1em' }}>
        Referanslar
      </Typography>
      <Grid container direction='column'>
        <Grid item md>
          <Referans />
        </Grid>
      </Grid>
    </div>
  );
};

export default Referanslar;
