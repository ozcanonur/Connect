import React from 'react';
import { Grid } from '@material-ui/core';

import { Facebook, Instagram } from '@material-ui/icons';

const Footer = () => {
  return (
    <div style={{ height: '300px', backgroundColor: 'black' }}>
      <Grid container direction='column' spacing={3}>
        <Grid item md style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: 'white' }}>
            <Facebook htmlColor='#3b5998' fontSize='large' />
          </span>
          <div style={{ backgroundColor: 'white' }}>
            <Instagram htmlColor='#e4405f' fontSize='large' />
          </span>
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
