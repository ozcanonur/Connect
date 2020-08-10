import React from 'react';
import { Grid, Button } from '@material-ui/core';

import { Facebook, Instagram } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    button: {
      ...theme.button,
      color: 'black',
      border: '2px solid white',
      backgroundColor: 'white',
    },
  };
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' spacing={3} style={{ backgroundColor: 'black' }}>
      <Grid item md style={{ textAlign: 'center' }}>
        <Facebook htmlColor='#3b5998' fontSize='large' />
        <Instagram htmlColor='#e4405f' fontSize='large' />
      </Grid>
      <Grid container direction='row'>
        <Grid item md>
          <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
            <Grid item md>
              <Button variant='contained' className={classes.button}>
                Iletisim
              </Button>
            </Grid>
            <Grid item md>
              <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item md>
                  <img
                    style={{
                      width: '100%',
                      height: '10em',
                      objectFit: 'contain',
                    }}
                    alt='Landing'
                    src={require('../../../assets/the-british-council.svg')}
                  />
                </Grid>
                <Grid item md>
                  <img
                    style={{
                      width: '100%',
                      height: '10em',
                      objectFit: 'contain',
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
          <Grid container direction='column'>
            <Grid item md>
              Bizimle calismak ister misiniz?
            </Grid>
            <Grid item md>
              <img
                style={{
                  width: '100%',
                  height: '10em',
                  objectFit: 'contain',
                }}
                alt='Landing'
                src={require('../../../assets/English-UK.jpg')}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
