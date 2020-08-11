import React from 'react';
import { Grid, Button, Typography, Divider } from '@material-ui/core';

import { Facebook, Instagram } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
      <Grid container direction='column' style={{ backgroundColor: 'black' }}>
        <Grid item md style={{ textAlign: 'center', marginTop: '1em' }}>
          <Facebook
            htmlColor='#3b5998'
            fontSize='large'
            style={{ backgroundColor: 'white', marginRight: '0.2em' }}
          />
          <Instagram htmlColor='#e4405f' fontSize='large' style={{ backgroundColor: 'white' }} />
        </Grid>
        <Grid container direction='row'>
          <Grid item md>
            <Grid container direction='column' justify='center' alignItems='center'>
              <Grid item md>
                <div className={classes.button}>Whatsapp QR</div>
              </Grid>
              <Grid item md style={{ marginTop: '1em' }}>
                <img
                  style={{
                    width: '100%',
                    height: '11em',
                    objectFit: 'contain',
                  }}
                  alt='Landing'
                  src={require('../../../assets/QR.png')}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md>
            <Grid container direction='column' justify='center' alignItems='center'>
              <Grid item md>
                <Button variant='contained' className={classes.button}>
                  Bizimle calismak ister misiniz?
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
              <Grid item md style={{ margintop: '1em' }}>
                <Grid container direction='row'>
                  <Grid item md style={{ marginRight: '6.5em' }}>
                    <img
                      style={{
                        height: '11em',
                        objectFit: 'cover',
                      }}
                      alt='Landing'
                      src={require('../../../assets/the-british-council.svg')}
                    />
                  </Grid>
                  <Grid item md>
                    <img
                      style={{
                        height: '11em',
                        objectFit: 'cover',
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
