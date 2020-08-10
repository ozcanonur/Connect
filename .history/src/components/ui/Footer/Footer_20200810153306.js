import React from 'react';
import { Grid } from '@material-ui/core';

const Footer = () => {
  return (
    <div style={{ height: '300px' }}>
      <Grid container direction='column'>
        <Grid item md style={{ textAlign: 'center' }}>
          Facebook instagram
        </Grid>
        <Grid container direction='row' alignItems='stretch'>
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
