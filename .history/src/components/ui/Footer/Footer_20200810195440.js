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
    <footer>
      <Grid
        container
        direction='column'
        spacing={3}
        style={{ backgroundColor: 'black', marginTop: '0.01em' }}>
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
                  <Grid item md></Grid>
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
            <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
              <Grid item md>
                <Button variant='contained' className={classes.button}>
                  Bizimle calismak ister misiniz?
                </Button>
              </Grid>
              <Grid item md>
                <Grid container direction='row' justify='space-evenly'>
                  <Grid item md>
                    <img
                      style={{
                        height: '8.5em',
                        objectFit: 'cover',
                        border: '1px solid blue',
                      }}
                      alt='Landing'
                      src={require('../../../assets/the-british-council.svg')}
                    />
                  </Grid>
                  <Grid item md>
                    <img
                      style={{
                        height: '8.5em',
                        objectFit: 'cover',
                        border: '1px solid blue',
                      }}
                      alt='Landing'
                      src={require('../../../assets/English-UK (1).jpg')}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
