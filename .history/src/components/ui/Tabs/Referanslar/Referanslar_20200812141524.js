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
    <div>
      <Grid container direction='column'>
        <Grid item md></Grid>
      </Grid>
    </div>
  );
};

export default Referanslar;