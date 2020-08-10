import React from 'react';
import { Grid } from '@material-ui/core';

import { Facebook, Instagram } from '@material-ui/icons';

const Footer = () => {
  return (
    <div style={{ height: '300px' }}>
      <Grid container direction='column'>
        <Grid item md style={{ textAlign: 'center' }}>
          <Facebook />
          <Instagram />
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
    </div>
  );
};

export default Footer;
