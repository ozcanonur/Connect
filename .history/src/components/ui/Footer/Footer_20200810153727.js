import React from 'react';
import { Grid } from '@material-ui/core';

import { Facebook, Instagram } from '@material-ui/icons';

const Footer = () => {
  return (
    <div style={{ height: '300px', backgroundColor: 'black' }}>
      <Grid container direction='column'>
        <Grid item md style={{ textAlign: 'center' }}>
          <Facebook htmlColor='#3b5998' fontSize='large' />
          <Instagram htmlColor='#e4405f' fontSize='large' />
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
