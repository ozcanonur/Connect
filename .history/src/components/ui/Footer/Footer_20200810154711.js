import React from 'react';
import { Grid } from '@material-ui/core';

import { Facebook, Instagram } from '@material-ui/icons';

const Footer = () => {
  return (
    <div style={{ height: '300px', backgroundColor: 'black' }}>
      <Grid container direction='column' spacing={3}>
        <Grid item md style={{ textAlign: 'center' }}>
          <Facebook htmlColor='#3b5998' fontSize='large' />
          <Instagram htmlColor='#e4405f' fontSize='large' />
        </Grid>
        <Grid container direction='row'>
          <Grid item md>
            <Grid container direction='column'>
              <Grid item>Iletisim</Grid>
              <Grid item>
                <Grid container direction='row' justify='center'>
                  <Grid item md>
                    <img
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                      }}
                      alt='Landing'
                      src={require('../../../assets/BritishCouncil.jpg')}
                    />
                  </Grid>
                  <Grid item md>
                    <img
                      style={{
                        width: '100%',
                        height: '50%'
                        objectFit: 'cover',
                      }}
                      alt='Landing'
                      src={require('../../../assets/QR.png')}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
