import React from 'react';
import { Grid } from '@material-ui/core';

const Referanslar = () => {
  return (
    <div>
      <Grid container direction='column'>
        <Grid item md>
          <Grid container direction='row'>
            <Grid item xs={3}>
              PIC
            </Grid>
            <Grid item xs={9}>
              TEXT
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Referanslar;
