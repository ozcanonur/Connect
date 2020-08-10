import React from 'react';
import { Grid } from '@material-ui/core';

const Footer = () => {
  return (
    <Grid container direction='column'>
      <Grid item md style={{ textAlign: 'center' }}>
        Facebook instagram
      </Grid>
      <Grid container direction='row'>
        <Grid item md>
          Left panel
        </Grid>
        <Grid item md>
          Right panel
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
